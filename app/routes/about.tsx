import type { MetaFunction } from 'react-router'
import { AboutPage } from '../Custom/pages/AboutPage'
import portrait from '../Custom/pages/AboutPage/assets/nikolai-lanets.webp'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle: SeoHandle = {
  seo: {
    title: 'Николай Ланец — обо мне | Как продвинуть сайт',
    description:
      'Я Николай Ланец, ИИ-исследователь и практикующий эксперт. 19+ лет самостоятельной практики, 200+ проектов, бигтех. Исследую применение ИИ в работе и обучении.',
    path: '/about',
    image: {
      src: portrait,
      alt: 'Николай Ланец — ИИ-исследователь и практикующий эксперт',
      width: 800,
      height: 930,
    },
    breadcrumbs: [
      { name: 'Главная', path: '/' },
      { name: 'Обо мне', path: '/about' },
    ],
  },
}

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default AboutPage
