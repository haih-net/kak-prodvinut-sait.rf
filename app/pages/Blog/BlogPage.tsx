import type * as React from 'react'
import { Link } from 'react-router'
import { BlogStyled } from './styles'

export const BlogPage: React.FC = () => (
  <BlogStyled>
    <nav aria-label="Навигация">
      <Link to="/">← Как продвинуть сайт</Link>
    </nav>
    <header>
      <p>50 сайтов за месяц</p>
      <h1 tabIndex={-1}>Дневник эксперимента.</h1>
      <p>Скоро здесь появятся первые записи.</p>
    </header>
  </BlogStyled>
)
