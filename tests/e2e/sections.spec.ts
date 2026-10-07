import { test, expect } from '@playwright/test'

test('ответ доступен с клавиатуры, переход сохраняет документ и переносит фокус', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await page.evaluate(() => Reflect.set(window, '__sectionDocument', true))
  const answer = page.locator('.answer-link')
  await answer.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('#answer')).toBeFocused()
  await expect
    .poll(async () =>
      page
        .locator('#answer')
        .evaluate((element) => Math.abs(element.getBoundingClientRect().top)),
    )
    .toBeLessThan(2)
  await expect(page.locator('nav a[aria-current]')).toHaveAttribute(
    'href',
    '#answer',
  )
  const fonts = await page.locator('h1, .answer').evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element)
      return [style.fontFamily, style.fontSize, style.fontWeight]
    }),
  )
  expect(fonts[0]).toEqual(fonts[1])
  expect(
    await page.evaluate(() => Reflect.get(window, '__sectionDocument')),
  ).toBe(true)
  expect(errors).toEqual([])
})

test('оглавление ведёт во все разделы и отслеживает прокрутку без анимации', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const navigation = page.getByRole('navigation', { name: 'Разделы главной' })
  const toggle = navigation.getByRole('button', { name: 'Разделы' })
  const ids = [
    'answer',
    'seriously',
    'position',
    'search',
    'resources',
    'advertising',
    'communities',
    'conclusion',
    'experiment',
    'question',
  ]
  for (const id of ids) {
    if (await toggle.isVisible()) {
      await toggle.click()
    }
    await navigation.locator(`a[href="#${id}"]`).click()
    await expect(page.locator(`#${id}`)).toBeFocused()
    await expect(navigation.locator('a[aria-current]')).toHaveAttribute(
      'href',
      `#${id}`,
    )
    if (await toggle.isVisible()) {
      await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    }
  }
  await page
    .locator('#advertising')
    .evaluate((element) => element.scrollIntoView())
  await expect(navigation.locator('a[aria-current]')).toHaveAttribute(
    'href',
    '#advertising',
  )
  await expect(page.locator('h1')).toHaveCSS('transform', 'none')
  if (await toggle.isVisible()) {
    await toggle.click()
    await navigation.locator('a').first().focus()
    await page.keyboard.press('Escape')
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle).toBeFocused()
  }
})

test('первый экран и меню помещаются на узких и широких экранах', async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1090, 1440]) {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.locator('.answer-link')).toBeInViewport()
    await page.locator('.answer-link').click({ trial: true })
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
    const title = await page.locator('h1').boundingBox()
    expect(title).not.toBeNull()
    if (!title) {
      throw new Error('Заголовок не найден')
    }
    expect(title.x + title.width).toBeLessThanOrEqual(width)
    const toggle = page.getByRole('button', { name: 'Разделы' })
    if (await toggle.isVisible()) {
      await toggle.click()
      await expect(
        page.getByRole('link', { name: 'Эксперимент', exact: true }),
      ).toBeInViewport()
    }
  }
})
