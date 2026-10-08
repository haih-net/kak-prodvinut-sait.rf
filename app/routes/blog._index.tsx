import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { journalPosts } from '../Custom/pages/Blog/posts'
import { BlogPage } from '../Custom/pages/Blog'

export const handle: SeoHandle = {
  seo: {
    title: 'Дневник эксперимента — Как продвинуть сайт',
    description:
      'Исследую способы продвижения и удержания аудитории. От причин запуска к проверкам, рабочим записям и результатам.',
    path: '/blog',
    blog: { posts: [...journalPosts] },
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default BlogPage
