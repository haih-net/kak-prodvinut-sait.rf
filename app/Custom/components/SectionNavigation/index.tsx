import type * as React from 'react'
import { NavLink, Link } from 'react-router'
import { NavigationStyled } from './styles'

export interface PageSection {
  id: string
  label: string
}

interface SectionNavigationProps {
  sections: readonly PageSection[]
  label: string
  panelId: string
  active: number
  expanded: boolean
  interactive: boolean
  navigationRef: React.RefObject<HTMLElement | null>
  toggleRef: React.RefObject<HTMLButtonElement | null>
  onToggle: () => void
  onClose: () => void
  onKeyDown: React.KeyboardEventHandler<HTMLElement>
  onSelect: React.MouseEventHandler<HTMLAnchorElement>
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  sections,
  label,
  panelId,
  active,
  expanded,
  interactive,
  navigationRef,
  toggleRef,
  onToggle,
  onClose,
  onKeyDown,
  onSelect,
}) => (
  <NavigationStyled
    ref={navigationRef}
    aria-label={label}
    data-expanded={expanded}
    onKeyDown={onKeyDown}
  >
    <button
      ref={toggleRef}
      className="contents-toggle"
      aria-expanded={expanded}
      aria-controls={panelId}
      disabled={!interactive}
      onClick={onToggle}
    >
      <span aria-hidden="true">{expanded ? '×' : '☰'}</span> Разделы
    </button>
    <div className="contents-panel" id={panelId}>
      <div className="site-links" aria-label="Страницы сайта">
        <NavLink to="/" end onClick={onClose}>
          Главная
        </NavLink>
        <NavLink to="/blog" onClick={onClose}>
          Дневник
        </NavLink>
      </div>
      <p className="contents-caption">На этой странице</p>
      <ol>
        {sections.map(({ id, label: sectionLabel }, index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === index ? 'location' : undefined}
              onClick={onSelect}
            >
              <span className="section-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{sectionLabel}</span>
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
        {String(active + 1).padStart(2, '0')}{' '}
        <span>/ {String(sections.length).padStart(2, '0')}</span>
      </p>
      <Link to="/about" className="identity-link" onClick={onClose}>
        Николай Ланец / 19+ лет в веб-разработке
      </Link>
    </div>
  </NavigationStyled>
)
