import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { FirstPostPage } from '../Custom/pages/Blog/FirstPost'
import { firstPost, projectJournalUrl } from '../Custom/pages/Blog/posts'

export const handle: SeoHandle = {
  seo: {
    title: `${firstPost.title} — Как продвинуть сайт`,
    description: firstPost.description,
    path: firstPost.path,
    breadcrumbs: [
      { name: 'Главная', path: '/' },
      { name: 'Дневник эксперимента', path: '/blog' },
      { name: firstPost.title, path: firstPost.path },
    ],
    article: {
      headline: firstPost.title,
      published: firstPost.date,
      citations: [projectJournalUrl],
    },
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default FirstPostPage
