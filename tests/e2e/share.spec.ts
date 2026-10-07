import { test, expect } from '@playwright/test'
import { canonicalUrl } from '../../app/components/seo/site'

test('share fallback and footer use canonical page URLs, including after SPA navigation', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: undefined,
    })
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text: string): Promise<void> => {
          Reflect.set(window, '__copied', text)
        },
      },
    })
    window.open = (url?: string | URL): Window | null => {
      Reflect.set(window, '__sharePopup', String(url))
      return null
    }
  })
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(
    page.getByText('Здесь я ничего напрямую не продаю.', { exact: false }),
  ).toHaveCount(0)
  await page
    .getByRole('button', { name: 'Поделиться ответом', exact: true })
    .click()
  const compact = page.locator('.share-compact')
  await compact.getByRole('button', { name: 'Telegram', exact: true }).click()
  await expect
    .poll(() => page.evaluate(() => Reflect.get(window, '__sharePopup')))
    .toContain(encodeURIComponent(canonicalUrl('/')))
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Скопировать ссылку' })
    .click()
  expect(await page.evaluate(() => Reflect.get(window, '__copied'))).toBe(
    canonicalUrl('/'),
  )
  await expect(page.locator('.share-footer [role="status"]')).toHaveText(
    'Ссылка скопирована',
  )
  await page.getByRole('link', { name: 'Читать дневник с начала' }).click()
  await expect(page).toHaveURL(/\/blog$/)
  await expect(page).toHaveTitle('Дневник: 50 сайтов за месяц')
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Скопировать ссылку' })
    .click()
  expect(await page.evaluate(() => Reflect.get(window, '__copied'))).toBe(
    canonicalUrl('/blog'),
  )
  expect(errors).toEqual([])
})

test('primary button passes the canonical answer to native sharing', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: async (data: ShareData): Promise<void> => {
        Reflect.set(window, '__nativeShare', data)
      },
    })
  })
  await page.goto('/')
  await page
    .getByRole('button', { name: 'Поделиться ответом', exact: true })
    .click()
  expect(
    await page.evaluate(() => Reflect.get(window, '__nativeShare')),
  ).toEqual({ title: 'Как продвинуть сайт? Никак.', url: canonicalUrl('/') })
  await expect(
    page
      .locator('.share-compact')
      .getByRole('button', { name: 'Telegram', exact: true }),
  ).toBeHidden()
  await page.getByRole('link', { name: 'Читать дневник с начала' }).click()
  await expect(page).toHaveURL(/\/blog$/)
  await expect(page).toHaveTitle('Дневник: 50 сайтов за месяц')
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  expect(
    await page.evaluate(() => Reflect.get(window, '__nativeShare')),
  ).toEqual({
    title: 'Дневник: 50 сайтов за месяц',
    url: canonicalUrl('/blog'),
  })
  await expect(
    page
      .locator('.share-footer')
      .getByRole('button', { name: 'Telegram', exact: true }),
  ).toBeHidden()
})

test('unavailable clipboard exposes a selectable URL', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: undefined,
    })
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: undefined,
    })
  })
  await page.goto('/blog')
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  await page
    .locator('.share-footer')
    .getByRole('button', { name: 'Скопировать ссылку' })
    .click()
  await expect(
    page.getByRole('textbox', { name: 'Ссылка на страницу' }),
  ).toHaveValue(canonicalUrl('/blog'))
})

test('cancelling native sharing does not open fallback buttons', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', {
      configurable: true,
      value: async (): Promise<void> => {
        throw new DOMException('Cancelled', 'AbortError')
      },
    })
  })
  await page.goto('/blog')
  await page
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  await expect(
    page
      .locator('.share-footer')
      .getByRole('button', { name: 'Telegram', exact: true }),
  ).toBeHidden()
})
