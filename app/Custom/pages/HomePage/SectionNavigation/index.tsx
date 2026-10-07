import type * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { homeSections, navigateToSection } from '../sections'
import { NavigationStyled } from './styles'

export const SectionNavigation: React.FC = () => {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [interactive, setInteractive] = useState(false)
  const navigation = useRef<HTMLElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  const toggleContents = useCallback(
    (): void => setExpanded((value) => !value),
    [],
  )
  const closeOnEscape = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === 'Escape') {
        setExpanded(false)
        toggle.current?.focus()
      }
    },
    [],
  )
  const selectSection = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>): void => {
      navigateToSection(event)
      if (event.defaultPrevented) {
        setExpanded(false)
      }
    },
    [],
  )

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const panels = homeSections.map(({ id }) => document.getElementById(id))
    let frame = 0
    const update = (): void => {
      frame = 0
      let current = 0
      panels.forEach((panel, index) => {
        if (
          panel &&
          panel.getBoundingClientRect().top <= window.innerHeight * 0.4
        ) {
          current = index
        }
      })
      setActive(current)
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.max(
        0,
        Math.min(1, window.scrollY / Math.max(1, scrollable)),
      )
      navigation.current?.style.setProperty(
        '--reading-progress',
        `${progress * 100}%`,
      )
      navigation.current?.style.setProperty(
        '--rail-drift',
        `${reducedMotion.matches ? 0 : -progress * 22}px`,
      )
    }
    const schedule = (): void => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }
    update()
    setInteractive(true)
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
    <NavigationStyled
      ref={navigation}
      aria-label="Разделы главной"
      data-expanded={expanded}
    >
      <button
        ref={toggle}
        className="contents-toggle"
        aria-expanded={expanded}
        aria-controls="home-contents"
        disabled={!interactive}
        onClick={toggleContents}
      >
        <span aria-hidden="true">{expanded ? '×' : '☰'}</span> Разделы
      </button>
      <div
        className="contents-panel"
        id="home-contents"
        onKeyDown={closeOnEscape}
      >
        <p className="contents-caption">По существу</p>
        <ol>
          {homeSections.map(({ id, label }, index) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === index ? 'location' : undefined}
                onClick={selectSection}
              >
                <span className="section-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{label}</span>
                <span className="current-mark" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ol>
        <div className="reading-meter" aria-hidden="true">
          <span />
        </div>
        <p className="section-counter" aria-hidden="true">
          {String(active + 1).padStart(2, '0')} <span>/ 10</span>
        </p>
      </div>
    </NavigationStyled>
  )
}
