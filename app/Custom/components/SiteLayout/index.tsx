import type * as React from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'
import { SiteStyled } from './styles'
import { SiteFooter } from '../SiteFooter'

interface SiteLayoutProps {
  children: React.ReactNode
}
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const focusContent = useCallback((): void => {
    document.getElementById('main-content')?.focus()
  }, [])
  const { pathname } = useLocation()
  const action = useNavigationType()
  const previous = useRef(pathname)
  useEffect(() => {
    if (previous.current !== pathname && action !== 'POP') {
      document
        .querySelector<HTMLElement>('#main-content h1')
        ?.focus({ preventScroll: true })
    }
    previous.current = pathname
  }, [pathname, action])
  return (
    <SiteStyled>
      <button className="skip-link" onClick={focusContent}>
        К содержанию
      </button>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter key={pathname} withSidebar={pathname === '/'} />
    </SiteStyled>
  )
}
