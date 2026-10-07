import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { HomePage } from '../Custom/pages/HomePage'

export const handle: SeoHandle = {
  seo: {
    title: 'Как продвинуть сайт?',
    description:
      'Авторская позиция о SEO, рекламе и доверии к трафику. 19+ лет в веб-разработке и собственный эксперимент: 50 сайтов за месяц.',
    path: '/',
  },
}
export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default HomePage
