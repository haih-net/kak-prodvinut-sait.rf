import type * as React from 'react'
import { Link } from 'react-router'
import type { PageSection } from '../../components/SectionNavigation'
import { useSectionNavigation } from '../../components/SectionNavigation/useSectionNavigation'
import { JournalStyled } from './styles'
import { journalPosts, projectJournalUrl } from './posts'

const sections: readonly PageSection[] = [
  { id: 'entries', label: 'Записи с начала' },
  { id: 'work', label: 'Публичная работа' },
]

export const BlogPage: React.FC = () => {
  const { navigation } = useSectionNavigation({
    sections,
    label: 'Разделы дневника',
  })
  return (
    <JournalStyled>
      {navigation}
      <div className="journal-inner">
        <nav className="page-nav" aria-label="Навигация">
          <Link to="/">← Как продвинуть сайт</Link>
        </nav>
        <header className="masthead">
          <p className="eyebrow">50 сайтов за месяц / Открытый эксперимент</p>
          <h1 tabIndex={-1}>
            Дневник
            <br />
            эксперимента<span>.</span>
          </h1>
          <p className="lead">
            Как найти свою аудиторию, когда на поиск больше не рассчитываешь?
          </p>
          <p className="intro">
            Здесь я последовательно разбираю свои наблюдения, проверяю идеи и
            рассказываю о результатах. От причин запуска — к конкретным попыткам
            привлечь и удержать людей.
          </p>
        </header>
        <section id="entries" tabIndex={-1} aria-labelledby="entries-title">
          <div className="section-heading">
            <h2 id="entries-title">Записи с начала</h2>
            <span>От старых к новым</span>
          </div>
          <ol className="entries">
            {journalPosts.map((post) => (
              <li key={post.path}>
                <span className="entry-number" aria-hidden="true">
                  {post.number}
                </span>
                <article>
                  <p className="eyebrow">
                    <time dateTime={post.date}>{post.dateLabel}</time> /
                    Отправная точка
                  </p>
                  <h3>
                    <Link to={post.path}>
                      {post.title}
                      <span aria-hidden="true"> ↗</span>
                    </Link>
                  </h3>
                  <p>{post.description}</p>
                  <Link className="text-link" to={post.path}>
                    Читать первую запись →
                  </Link>
                </article>
              </li>
            ))}
          </ol>
        </section>
        <section
          id="work"
          className="journal-note"
          tabIndex={-1}
          aria-labelledby="work-title"
        >
          <p className="eyebrow">За выводами — ход работы</p>
          <h2 id="work-title">Исследование можно проследить.</h2>
          <p>
            Статьи складываются в последовательный рассказ. Проекты, задачи,
            рабочие записи и замеры я веду в открытом журнале на fi1osof.ru. Там
            будет публиковаться и работа над этим экспериментом.
          </p>
          <a className="text-link" href={projectJournalUrl}>
            Проект и задачи на fi1osof.ru ↗
          </a>
        </section>
      </div>
    </JournalStyled>
  )
}
