import type * as React from 'react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { Share } from '../../components/Share'
import { IntroductionStyled } from './introduction.styles'
interface IntroductionProps {
  navigateToSection: React.MouseEventHandler<HTMLAnchorElement>
}

export const Introduction: React.FC<IntroductionProps> = ({
  navigateToSection,
}) => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panels = Array.from(
      container.current?.querySelectorAll<HTMLElement>('.intro-screen') ?? [],
    )
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = (): void => {
      frame = 0
      for (const panel of panels) {
        const { top, height } = panel.getBoundingClientRect()
        const offset = reducedMotion.matches
          ? 0
          : Math.max(-height, Math.min(height, -top)) * 0.24
        panel.style.setProperty('--parallax-offset', `${offset}px`)
      }
    }
    const schedule = (): void => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    reducedMotion.addEventListener('change', schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      reducedMotion.removeEventListener('change', schedule)
    }
  }, [])

  return (
    <IntroductionStyled ref={container} className="introduction">
      <section
        className="intro-screen question-screen"
        aria-labelledby="main-title"
        id="question"
        tabIndex={-1}
      >
        <header className="poster-header">
          <span className="wordmark">
            <span className="asterisk" aria-hidden="true">
              ✳
            </span>
            <span>как-продвинуть-сайт.рф</span>
          </span>
          <Link to="/about" className="author-line">
            Николай Ланец <span> / </span> 19+ лет в веб-разработке
          </Link>
        </header>
        <div className="question-composition">
          <h1 className="screen-text" id="main-title" tabIndex={-1}>
            <span>Как</span> <span>продвинуть</span>{' '}
            <span className="last-line">
              сайт<span className="question-mark">?</span>
            </span>
          </h1>
          <svg
            className="detour-arrow"
            viewBox="0 0 320 510"
            fill="none"
            aria-hidden="true"
          >
            <path d="M35 30 C180 -12 318 45 269 169 C229 270 80 204 134 122 C170 68 249 150 219 258 C208 314 198 377 241 459" />
            <path d="M185 433 L244 466 L265 398" />
          </svg>
          <a className="answer-link" href="#answer" onClick={navigateToSection}>
            <span>Ответ</span>
            <span className="answer-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
        <footer className="poster-footer" aria-hidden="true">
          <span>01 / Вопрос</span>
          <span className="footer-rule" />
          <span>Ответ ниже ↓</span>
        </footer>
      </section>
      <section
        className="intro-screen answer-screen"
        aria-label="Ответ"
        id="answer"
        tabIndex={-1}
      >
        <span className="panel-index" aria-hidden="true">
          02 / Ответ
        </span>
        <p className="screen-text answer">Никак</p>
        <a
          className="next-screen"
          href="#seriously"
          onClick={navigateToSection}
        >
          Серьёзно? <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section
        className="intro-screen confirmation-screen"
        aria-label="Серьезно"
        id="seriously"
        tabIndex={-1}
      >
        <span className="panel-index" aria-hidden="true">
          03 / Серьёзно.
        </span>
        <div className="confirmation-content">
          <p className="screen-text">Серьезно. Никак.</p>
          <Share compact />
        </div>
        <a className="next-screen" href="#position" onClick={navigateToSection}>
          Но как так-то?! <span aria-hidden="true">↓</span>
        </a>
      </section>
    </IntroductionStyled>
  )
}
