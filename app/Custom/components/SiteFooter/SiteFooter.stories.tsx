import type * as React from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router'
import { DocumentStyled, SiteStyled } from '../SiteLayout/styles'
import { SiteFooter } from './index'

interface FooterPreviewProps {
  pathname: string
}

const FooterRoute: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <DocumentStyled as="div">
      <SiteStyled>
        <SiteFooter key={pathname} pathname={pathname} />
      </SiteStyled>
    </DocumentStyled>
  )
}

const FooterPreview: React.FC<FooterPreviewProps> = ({ pathname }) => {
  // Data router нужен Share для useMatches и канонического адреса страницы.
  const [router] = useState(() =>
    createMemoryRouter([{ path: '*', Component: FooterRoute }], {
      initialEntries: [pathname],
    }),
  )
  return <RouterProvider router={router} />
}

const meta = {
  title: 'Компоненты/Футер',
  component: SiteFooter,
  parameters: { layout: 'fullscreen' },
  argTypes: { pathname: { control: 'text' } },
  render: (args) => (
    <FooterPreview key={args.pathname} pathname={args.pathname} />
  ),
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {
  name: 'Главная',
  args: { pathname: '/' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { name: 'Продвинем хотя бы этот разговор.' }),
    ).toBeVisible()
    await expect(canvas.getByRole('contentinfo')).toHaveAttribute(
      'data-with-sidebar',
      'true',
    )
    await expect(
      canvas.getByRole('button', { name: 'Поделиться страницей' }),
    ).toBeVisible()
  },
}

export const About: Story = {
  name: 'Обо мне',
  args: { pathname: '/about' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { name: 'Есть с кем поделиться?' }),
    ).toBeVisible()
    await expect(canvas.getByRole('contentinfo')).toHaveAttribute(
      'data-with-sidebar',
      'true',
    )
    await expect(
      canvas.queryByText('Сделано без обещаний первого места'),
    ).not.toBeInTheDocument()
  },
}

export const Blog: Story = {
  name: 'Дневник',
  args: { pathname: '/blog' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { name: 'Есть с кем поделиться?' }),
    ).toBeVisible()
    await expect(canvas.getByRole('contentinfo')).toHaveAttribute(
      'data-with-sidebar',
      'false',
    )
    await expect(
      canvas.getByRole('button', { name: 'Поделиться страницей' }),
    ).toBeVisible()
  },
}

export const NestedPage: Story = {
  name: 'Вложенная страница',
  args: { pathname: '/blog/example' },
  play: Blog.play,
}
