import { test, expect } from '@playwright/test'
import { canonicalUrl } from '../../app/components/seo/site'

test('гидратация, отложенная загрузка дневника, SPA, фокус, история и метаданные', async ({
  page,
}) => {
  const errors: string[] = []
  const requests: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text())
    }
  })
  page.on('request', (request) => requests.push(request.url()))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Как продвинуть сайт?',
  )
  await expect(page.locator('.answer')).toHaveText('Никак')
  await page.waitForLoadState('networkidle')
  expect(requests.some((url) => /assets\/blog\._index-.*\.js/.test(url))).toBe(
    false,
  )
  await page.evaluate(() => Reflect.set(window, '__spaTest', 'same-document'))
  await page.getByRole('link', { name: 'Читать дневник с начала' }).click()
  await expect(page).toHaveURL(/\/blog$/)
  await expect(page).toHaveTitle('Дневник эксперимента — Как продвинуть сайт')
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused()
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    canonicalUrl('/blog'),
  )
  expect(requests.some((url) => /assets\/blog\._index-.*\.js/.test(url))).toBe(
    true,
  )
  await page.goBack()
  await expect(page).toHaveTitle('Как продвинуть сайт?')
  await page.goForward()
  await expect(page).toHaveURL(/\/blog$/)
  expect(await page.evaluate(() => Reflect.get(window, '__spaTest'))).toBe(
    'same-document',
  )
  expect(errors).toEqual([])
})

test('прямой вход, обновление и мобильное содержание', async ({ page }) => {
  for (const path of ['/', '/blog']) {
    const response = await page.goto(path)
    expect(response?.status()).toBe(200)
    expect((await page.reload())?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  }
})

test('неизвестные адреса и удалённые страницы заготовки возвращают 404', async ({
  page,
  request,
}) => {
  for (const path of ['/missing-page', '/solutions', '/assets/missing.js']) {
    expect((await request.get(path)).status()).toBe(404)
  }
  expect((await page.goto('/missing-page'))?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: 'Страница не найдена' }),
  ).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    /noindex/,
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0)
})
