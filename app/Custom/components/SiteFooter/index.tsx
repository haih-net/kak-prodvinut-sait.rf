import type * as React from 'react'
import { Link } from 'react-router'
import { Share } from '../Share'
import { FooterStyled } from './styles'

interface SiteFooterProps {
  pathname: string
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ pathname }) => {
  const currentPath = pathname.replace(/\/+$/, '') || '/'
  const isHome = currentPath === '/'
  const withSidebar = isHome || currentPath === '/about'

  return (
    <FooterStyled data-with-sidebar={withSidebar}>
      <div className="footer-inner">
        <div className="footer-kicker">
          <span aria-hidden="true">✳</span> Передать дальше
        </div>
        <div className="footer-conversation">
          <h2>
            {isHome ? 'Продвинем хотя бы' : 'Есть с кем'}{' '}
            <br />
            <span>{isHome ? 'этот разговор.' : 'поделиться?'}</span>
          </h2>
          <div className="footer-sharing">
            <p>
              {isHome
                ? 'Знаете того, кто ищет ответ?'
                : 'Эта страница может быть интересна кому-то ещё.'}{' '}
              <br />
              {isHome ? 'Отправьте ему эту страницу.' : 'Отправьте ссылку.'}
            </p>
            <Share />
          </div>
        </div>
        <div className="footer-colophon">
          <div className="footer-author">
            <span>Николай Ланец</span>
            <span>19+ лет в веб-разработке</span>
          </div>
          <nav aria-label="Ссылки в подвале">
            <Link to="/">Главная</Link>
            <Link to="/about">Обо мне</Link>
            <Link to="/blog">
              Дневник эксперимента <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
        <div className="footer-signature">
          <span>
            {isHome
              ? 'Сделано без обещаний первого места'
              : 'Моя практика, исследования и наблюдения'}
          </span>
          <a
            href="https://fi1osof.ru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="By 𝕱 — сайт Николая Ланца, новая вкладка"
          >
            By <span>𝕱</span>
          </a>
        </div>
      </div>
    </FooterStyled>
  )
}
