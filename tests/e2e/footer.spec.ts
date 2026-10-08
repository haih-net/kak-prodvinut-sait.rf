import { test, expect } from '@playwright/test'
import { canonicalUrl } from '../../app/components/seo/site'

test('один футер меняет содержание, отступ и адрес при переходах', async ({
  page,
}) => {
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
  await page.goto('/')
  const footer = page.getByRole('contentinfo')
  await expect(footer).toHaveCount(1)
  await expect(footer.getByRole('heading')).toHaveText(
    'Продвинем хотя бы этот разговор.',
  )
  await expect(footer).toHaveAttribute('data-with-sidebar', 'true')
  await expect(
    footer.getByText('Сделано без обещаний первого места'),
  ).toBeVisible()
  await footer.getByRole('link', { name: 'Обо мне', exact: true }).click()
  await expect(page).toHaveURL(/\/about$/)
  await expect(footer.getByRole('heading')).toHaveText('Есть с кем поделиться?')
  await expect(footer).toHaveAttribute('data-with-sidebar', 'true')
  await expect(
    footer.getByText('Моя практика, исследования и наблюдения'),
  ).toBeVisible()
  await expect(footer.getByText('Знаете того, кто ищет ответ?')).toHaveCount(0)
  await footer
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  await footer.getByRole('button', { name: 'Скопировать ссылку' }).click()
  await expect(
    footer.getByRole('textbox', { name: 'Ссылка на страницу' }),
  ).toHaveValue(canonicalUrl('/about'))
  await footer.getByRole('link', { name: 'Дневник эксперимента' }).click()
  await expect(page).toHaveURL(/\/blog$/)
  await expect(footer).toHaveAttribute('data-with-sidebar', 'false')
  await expect(footer.getByRole('heading')).toHaveText('Есть с кем поделиться?')
  await footer
    .getByRole('button', { name: 'Поделиться страницей', exact: true })
    .click()
  await footer.getByRole('button', { name: 'Скопировать ссылку' }).click()
  await expect(
    footer.getByRole('textbox', { name: 'Ссылка на страницу' }),
  ).toHaveValue(canonicalUrl('/blog'))
  await footer.getByRole('link', { name: 'Главная', exact: true }).click()
  await expect(footer.getByRole('heading')).toHaveText(
    'Продвинем хотя бы этот разговор.',
  )
})
