import { test, expect } from '@playwright/test'
import { canonicalUrl } from '../../app/components/seo/site'

test('Обо мне: SPA, история, метаданные, фото и подробности', async ({
  page,
}) => {
  const errors: string[] = []
  let documents = 0
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text())
    }
  })
  page.on('request', (request) => {
    if (request.isNavigationRequest() && request.frame() === page.mainFrame()) {
      documents++
    }
  })
  await page.goto('/')
  await page
    .getByRole('link', { name: 'Кто я и на чём основана моя позиция' })
    .click()
  await expect(page).toHaveURL(/\/about$/)
  await expect(page).toHaveTitle(
    'Николай Ланец — обо мне | Как продвинуть сайт',
  )
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused()
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    canonicalUrl('/about'),
  )
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    /nikolai-lanets-.*\.webp$/,
  )
  const portrait = page.getByRole('img', { name: 'Николай Ланец', exact: true })
  await expect(portrait).toBeVisible()
  await expect
    .poll(() =>
      portrait.evaluate(
        (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
      ),
    )
    .toBe(true)
  await page
    .getByText('Как я начинал: биллинг, Oracle и первые сайты', { exact: true })
    .click()
  await expect(
    page.getByText('В IT я пришёл в июле 2007 года.', { exact: false }),
  ).toBeVisible()
  await page.goBack()
  await expect(page).toHaveURL(/\/$/)
  await page.goForward()
  await expect(page).toHaveURL(/\/about$/)
  expect(documents).toBe(1)
  expect(errors).toEqual([])
})

test('Обо мне: прямой вход, обновление, якоря и размер страницы', async ({
  page,
}) => {
  expect((await page.goto('/about'))?.status()).toBe(200)
  expect((await page.reload())?.status()).toBe(200)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Николай Ланец.',
  )
  await page.getByRole('link', { name: 'Над чем я работаю сейчас' }).click()
  await expect(page).toHaveURL(/\/about$/)
  await expect(page.locator('#research')).toBeFocused()
  await expect(
    page.getByRole('heading', {
      name: 'Будущее проверяю делом.',
    }),
  ).toBeInViewport()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
  await page
    .getByText('Ещё публикации и свидетельства', { exact: true })
    .click()
  await expect(
    page.getByRole('link', { name: 'Мои публикации на Хабре' }),
  ).toBeVisible()
})

test('общий хук: секции «Обо мне», фокус, счётчик и Escape', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/about')
  const nav = page.getByRole('navigation', {
    name: 'Разделы страницы «Обо мне»',
  })
  const toggle = nav.getByRole('button', { name: 'Разделы' })
  const ids = [
    'about',
    'research',
    'now',
    'practice',
    'business',
    'people',
    'history',
    'position',
  ]
  await expect(nav.locator('ol a')).toHaveCount(ids.length)
  for (const id of ids) {
    if (await toggle.isVisible()) {await toggle.click()}
    await nav.locator(`a[href="#${id}"]`).click()
    await expect(page.locator(`#${id}`)).toBeFocused()
    await expect(nav.locator('a[aria-current="location"]')).toHaveAttribute(
      'href',
      `#${id}`,
    )
    await expect(nav.locator('.section-counter')).toHaveText(
      `${String(ids.indexOf(id) + 1).padStart(2, '0')} / 08`,
    )
    if (await toggle.isVisible())
      {await expect(toggle).toHaveAttribute('aria-expanded', 'false')}
  }
  if (await toggle.isVisible()) {
    await toggle.click()
    await nav.getByRole('link', { name: 'Главная', exact: true }).focus()
    await page.keyboard.press('Escape')
    await expect(toggle).toBeFocused()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  }
})

test('имя ведёт на «Обо мне», а меню различает страницы и секции', async ({
  page,
}) => {
  const identity = 'Николай Ланец / 19+ лет в веб-разработке'
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Разделы главной' })
  await expect(nav.locator('ol a')).toHaveCount(10)
  await expect(nav.locator('ol a[href="/about"]')).toHaveCount(0)
  await expect(nav.getByRole('link', { name: 'Об авторе' })).toHaveCount(0)
  const toggle = nav.getByRole('button', { name: 'Разделы' })
  if (await toggle.isVisible()) {
    await toggle.click()
    const link = nav.getByRole('link', { name: identity })
    await expect(link).toBeVisible()
    await expect(link).toHaveCSS('color', 'rgb(113, 109, 101)')
    expect(
      await link.evaluate((element) =>
        Boolean(
          element.previousElementSibling?.classList.contains('section-counter'),
        ),
      ),
    ).toBe(true)
    await link.click()
  } else {
    const link = page.locator('.author-line')
    await expect(link).toHaveText(identity)
    await expect(link).toHaveCSS('color', 'rgb(113, 109, 101)')
    await link.hover()
    await expect(link).toHaveCSS('color', 'rgb(206, 48, 35)')
    await link.click()
  }
  await expect(page).toHaveURL(/\/about$/)
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused()
  await expect(
    page.getByText('ИИ-исследователь. Практикующий эксперт.', { exact: true }),
  ).toBeVisible()
  await expect(page.getByText('10+ лет', { exact: true })).toHaveCount(0)
})

test('портрет, текст и навигация не перекрываются на разных экранах', async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1090, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/about')
    await page.evaluate(() => document.fonts.ready)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
    const portrait = await page.locator('.portrait').boundingBox()
    const heading = await page.locator('#profile-title').boundingBox()
    expect(portrait).not.toBeNull()
    expect(heading).not.toBeNull()
    if (!portrait || !heading) {throw new Error('Нет портрета или заголовка')}
    expect(portrait.x + portrait.width).toBeLessThanOrEqual(heading.x)
    if (width >= 1088) {
      const nav = await page.locator('.contents-panel').boundingBox()
      if (!nav) {throw new Error('Нет меню')}
      expect(nav.x + nav.width).toBeLessThan(portrait.x)
    } else {
      await page.getByRole('button', { name: 'Разделы' }).click()
      const link = page.locator('.identity-link')
      await link.scrollIntoViewIfNeeded()
      await expect(link).toBeInViewport()
    }
  }
})
