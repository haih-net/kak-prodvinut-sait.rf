import type * as React from 'react'

interface HomeSection {
  id: string
  label: string
}

export const homeSections: readonly HomeSection[] = [
  { id: 'question', label: 'Вопрос' },
  { id: 'answer', label: 'Ответ' },
  { id: 'seriously', label: 'Серьёзно?' },
  { id: 'position', label: 'А вот так' },
  { id: 'search', label: 'Поиск' },
  { id: 'resources', label: 'Ресурсы' },
  { id: 'advertising', label: 'Реклама' },
  { id: 'communities', label: 'Сообщества' },
  { id: 'conclusion', label: 'Что остаётся' },
  { id: 'experiment', label: 'Эксперимент' },
]

export const navigateToSection = (
  event: React.MouseEvent<HTMLAnchorElement>,
): void => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return
  }
  const target = document.getElementById(event.currentTarget.hash.slice(1))
  if (!target) {
    return
  }
  event.preventDefault()
  target.focus({ preventScroll: true })
  target.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : 'smooth',
    block: 'start',
  })
}
