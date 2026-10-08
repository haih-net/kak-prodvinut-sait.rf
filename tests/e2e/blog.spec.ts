import { test, expect } from '@playwright/test'
import { canonicalUrl } from '../../app/components/seo/site'
import { firstPost } from '../../app/Custom/pages/Blog/posts'

test('первая запись: SPA, метаданные, история, прямой вход и чтение', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text())
    }
  })
  await page.goto('/blog')
  await page.evaluate(() => Reflect.set(window, '__blogDocument', true))
  await page.getByRole('link', { name: 'Читать первую запись' }).click()
  await expect(page).toHaveURL(firstPost.path)
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused()
  expect(await page.evaluate(() => Reflect.get(window, '__blogDocument'))).toBe(
    true,
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    canonicalUrl(firstPost.path),
  )
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    'content',
    'article',
  )
  await expect(
    page.locator('meta[property="article:published_time"]'),
  ).toHaveAttribute('content', firstPost.date)
  await expect(
    page.getByRole('link', { name: 'своя карточка проекта' }),
  ).toHaveAttribute('href', /fi1osof.ru\/projects\//)
  await page.goBack()
  await expect(page).toHaveURL(/\/blog$/)
  await page.goForward()
  await expect(page).toHaveURL(firstPost.path)
  expect((await page.reload())?.status()).toBe(200)
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    firstPost.title,
  )
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
  await expect(page.getByRole('contentinfo')).toHaveAttribute(
    'data-with-sidebar',
    'true',
  )
  const contents = page.getByRole('navigation', {
    name: 'Содержание первой записи',
  })
  const toggle = contents.getByRole('button', { name: 'Разделы' })
  if (await toggle.isVisible()) {
    await toggle.click()
  }
  await contents.getByRole('link', { name: 'Открытый журнал' }).click()
  await expect(page.locator('#journal')).toBeFocused()
  await expect(page.locator('#journal-title')).toBeInViewport()
  expect(errors).toEqual([])
})
