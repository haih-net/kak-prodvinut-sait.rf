export interface JournalPost {
  title: string
  path: string
  description: string
  date: string
  dateLabel: string
  number: string
}

export const firstPost: JournalPost = {
  title: 'Почему я запускаю этот эксперимент',
  path: '/blog/pochemu-ya-zapuskayu-etot-eksperiment',
  description:
    'В феврале я вернулся к своим проектам и обнаружил, что поисковики меня забыли. Полгода восстановления видимости привели к поиску другого пути.',
  date: '2026-10-08',
  dateLabel: '8 октября 2026',
  number: '01',
}

export const journalPosts: readonly JournalPost[] = [firstPost].sort(
  (left: JournalPost, right: JournalPost): number =>
    left.date.localeCompare(right.date),
)

export const projectJournalUrl: string =
  'https://fi1osof.ru/projects/cmuymjnak0106nw0p28llboa4'
