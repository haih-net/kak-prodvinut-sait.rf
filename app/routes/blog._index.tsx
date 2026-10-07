import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { BlogPage } from '../pages/Blog/BlogPage'

export const handle: SeoHandle = {
  seo: {
    title: 'Дневник: 50 сайтов за месяц',
    description:
      'Дневник эксперимента «50 сайтов за месяц». Скоро здесь появятся первые записи о решениях, работе и результатах.',
    path: '/blog',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default BlogPage
