import type { MetaFunction } from 'react-router'
import { data } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
export const handle = {
  seo: {
    title: 'Страница не найдена — Как продвинуть сайт',
    description: 'Такой страницы нет.',
    noindex: true,
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export const loader = (): ReturnType<typeof data<null>> =>
  data(null, { status: 404 })

export default function NotFound() {
  return (
    <>
      <h1 tabIndex={-1}>Страница не найдена</h1>
      <p>Проверьте адрес страницы.</p>
    </>
  )
}
