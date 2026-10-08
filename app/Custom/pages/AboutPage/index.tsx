import type * as React from 'react'
import { Link } from 'react-router'
import { AboutStyled } from './styles'
import portrait from './assets/nikolai-lanets.webp'
import portraitSmall from './assets/nikolai-lanets-small.webp'
import { useSectionNavigation } from '../../components/SectionNavigation/useSectionNavigation'
import { aboutSections } from './sections'

export const AboutPage: React.FC = () => {
  const { navigation, navigateToSection } = useSectionNavigation({
    sections: aboutSections,
    label: 'Разделы страницы «Обо мне»',
  })
  return (
    <AboutStyled>
      {navigation}
      <div className="about-inner">
        <nav className="page-nav" aria-label="Навигация">
          <Link to="/">← Как продвинуть сайт</Link>
        </nav>

        <header className="masthead" id="about" tabIndex={-1}>
          <p className="eyebrow">Обо мне / Fi1osof</p>
          <h1 tabIndex={-1}>
            Николай Ланец<span>.</span>
          </h1>
          <p className="profession">ИИ-исследователь. Практикующий эксперт.</p>
        </header>

        <section className="profile" aria-labelledby="profile-title">
          <figure className="portrait">
            <img
              src={portrait}
              srcSet={`${portraitSmall} 400w, ${portrait} 800w`}
              sizes="(min-width: 1440px) 280px, (min-width: 1088px) 240px, (min-width: 960px) 320px, (min-width: 640px) 240px, 100px"
              width={800}
              height={930}
              alt="Николай Ланец"
              fetchPriority="high"
            />
            <figcaption>
              В сети — Fi1osof. В работе — по-прежнему программист.
            </figcaption>
          </figure>
          <div className="profile-copy">
            <h2 id="profile-title">
              Исследую, что с ИИ можно сделать уже сейчас.
            </h2>
            <p className="lead">
              Как одному человеку делать больше. Как быстрее переходить от идеи
              к работающему решению. Как учиться, создавать продукты и сохранять
              самостоятельность, когда привычные правила меняются.
            </p>
            <p>
              Моя область — эффективное применение ИИ, а не обучение моделей. Я
              пишу код, собираю инструменты и проверяю идеи в собственных
              проектах. За этой работой — 19+ лет непрерывной самостоятельной
              практики, более 200 проектов, бигтех, свои студии и
              наставничество.
            </p>
            <a
              className="text-link"
              href="#research"
              onClick={navigateToSection}
            >
              Над чем я работаю сейчас ↓
            </a>
          </div>
        </section>

        <dl className="facts" aria-label="Опыт в цифрах">
          <div>
            <dt>19+ лет</dt>
            <dd>самостоятельной практики с 2007 года</dd>
          </div>
          <div>
            <dt>200+</dt>
            <dd>проектов за плечами</dd>
          </div>
          <div>
            <dt>Сейчас</dt>
            <dd>исследую ИИ и продолжаю программировать</dd>
          </div>
        </dl>

        <section
          className="chapter-grid chapter"
          id="research"
          tabIndex={-1}
          aria-labelledby="research-title"
        >
          <div className="chapter-label">
            <p className="eyebrow">01 / Что исследую</p>
            <p className="side-note">
              Технологии.
              <br />
              Самостоятельность.
              <br />
              Понимание.
            </p>
          </div>
          <div className="chapter-copy">
            <h2 id="research-title">Будущее проверяю делом.</h2>
            <p className="lead">
              Меня интересует не только то, что умеет очередная модель. Важно,
              как её возможности меняют работу, экономику проекта и свободу
              человека выбирать собственный путь.
            </p>
            <p>
              Мой рабочий цикл: заметить изменение, сформулировать гипотезу,
              сделать работающую проверку, столкнуться с ограничениями и
              пересмотреть решение. Стоимость, качество, поддержка и поведение
              людей здесь так же важны, как код.
            </p>
            <div className="research-directions">
              <section aria-labelledby="solo-title">
                <h3 id="solo-title">Больше возможностей у одного человека</h3>
                <p>
                  ИИ позволяет брать на себя более широкий круг задач. Я
                  исследую, как это использовать для собственных продуктов и
                  работы с клиентами. Самостоятельность для меня не означает
                  одиночество: можно работать с людьми и агентами, сохраняя
                  право выбирать направление.
                </p>
                <a href="https://solopreneur.prof/">Solopreneur.prof →</a>
              </section>
              <section aria-labelledby="future-title">
                <h3 id="future-title">
                  Изменения систем, а не только инструментов
                </h3>
                <p>
                  Быстрее написать код недостаточно, если вся остальная работа
                  устроена по-старому. Я разбираю, как меняются связи между
                  технологиями, организациями и людьми, и что из этого уже можно
                  проверить на практике.
                </p>
                <a href="https://futurist.expert/">Futurist.expert →</a>
              </section>
              <section aria-labelledby="learning-title">
                <h3 id="learning-title">Понимание без порога из терминов</h3>
                <p>
                  В Conceptica исследую, как помогать человеку разобраться в
                  новом, отталкиваясь от того, что он уже понимает. ИИ даёт
                  возможность начать со своих слов и своей задачи, а не с
                  изучения языка чужой системы.
                </p>
                <a href="https://conceptica.world/">Conceptica.world →</a>
              </section>
            </div>
            <p>
              Инженерная сторона этой работы — haih-agent, память и инструменты
              агентов, интеграции и развитие работающих сайтов. Проекты, задачи
              и найденные проблемы я собираю на{' '}
              <a href="https://fi1osof.ru/">fi1osof.ru</a>.
            </p>
            <p className="statement">
              Мне важно не предсказать красивое будущее, а понять, что
              изменилось уже сегодня и какие решения теперь стали возможны.
            </p>
          </div>
        </section>
      </div>

      <section
        className="now-band"
        id="now"
        tabIndex={-1}
        aria-labelledby="now-title"
      >
        <div className="about-inner chapter-grid">
          <div className="chapter-label">
            <p className="eyebrow">02 / Мой выбор</p>
            <p className="date-note">
              Февраль 2026
              <br />
              Новый этап
            </p>
          </div>
          <div className="chapter-copy">
            <h2 id="now-title">Я выбрал время для исследований.</h2>
            <p className="lead">
              Свои проекты и исследования я не прекращал даже тогда, когда
              работал в компаниях. Но хотел заниматься ими гораздо плотнее. В
              феврале 2026 года я добровольно ушёл из европейской компании с
              хорошей зарплаты.
            </p>
            <p>
              До ухода я предложил открыть и развивать внутри компании
              ИИ-лабораторию. Компания отказалась: предпочла сосредоточиться на
              том, что уже приносит деньги, включая существующие legacy-решения,
              а не вкладываться в новое стратегическое направление. Я выбрал
              двигаться дальше самостоятельно.
            </p>
            <p>
              К началу этого блога, в октябре 2026 года, за плечами уже больше
              полугода такого погружения. Новые технологии, агенты, собственные
              продукты: многое из того, о чём говорю здесь, я за это время
              прочувствовал в деле.
            </p>
            <p>
              Руководящие роли были в моей жизни много раз. Но я всегда
              оставался практикующим программистом. Мне важно самому понимать,
              что работает, где возникают проблемы и чего стоит результат.
            </p>
            <p className="statement">
              Мой опыт продолжается в коде, проектах и решениях, которые я
              принимаю сегодня.
            </p>
          </div>
        </div>
      </section>

      <div className="about-inner">
        <section
          className="chapter-grid chapter"
          id="practice"
          tabIndex={-1}
          aria-labelledby="practice-title"
        >
          <div className="chapter-label">
            <p className="eyebrow">03 / Основания</p>
            <p className="side-note">
              От одного заказчика
              <br />
              до крупных компаний
            </p>
          </div>
          <div className="chapter-copy">
            <h2 id="practice-title">Фриланс. Спасение проектов. Бигтех.</h2>
            <p className="lead">
              19+ лет я веду самостоятельную практику. Сначала основной работой
              был фриланс. Позже к нему добавились крупные компании и проекты,
              но собственные разработки и исследования продолжались всегда.
            </p>
            <h3>Когда проект уже нужно спасать</h3>
            <p>
              На фрилансе я часто брался за задачи из серии «довести до ума» или
              откровенно «спасти». Незавершённая разработка. Чужой код.
              Страницы, которые загружаются по 20–30 секунд. Нужно разобраться,
              найти причину и довести систему до рабочего состояния.
            </p>
            <p>
              За моими плечами более 200 проектов. Этот опыт позволяет смотреть
              дальше запуска: что будет с поддержкой, сколько будет стоить
              изменение и кто останется отвечать за сайт.
            </p>
            <h3>Когда работаешь внутри большой команды</h3>
            <p>
              СберКласс, СберЛаб, европейские и американские компании. В СберЛаб
              виртуальной и дополненной реальности я полтора года работал
              тимлидом/техлидом и ведущим программистом на проекте собственной
              метавселенной Сбера.
            </p>
            <p>
              Я знаю работу самостоятельного исполнителя и работу внутри крупных
              организаций. Могу сопоставлять решения с разных позиций — и как
              руководитель, и как инженер, который сам их реализует.
            </p>
            <details>
              <summary>Как я начинал: биллинг, Oracle и первые сайты</summary>
              <div className="detail-copy">
                <p>
                  В IT я пришёл в июле 2007 года. Сначала работал у
                  интернет-провайдера в Хабаровске, затем — в отделе биллинга
                  сотового оператора. Пришлось быстро осваивать Oracle и почти
                  год много работать с SQL.
                </p>
                <p>
                  В конце 2008 года переехал в Москву и ушёл во фриланс.
                  Примерно с января 2009 года начал работать с MODX. Базы
                  данных, серверная логика, интерфейсы и эксплуатация постепенно
                  сложились в общую инженерную практику.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section
          className="chapter-grid chapter"
          id="business"
          tabIndex={-1}
          aria-labelledby="business-title"
        >
          <div className="chapter-label">
            <p className="eyebrow">04 / Цена опыта</p>
            <p className="side-note">
              Две студии в Москве.
              <br />
              Две неудачные попытки.
            </p>
          </div>
          <div className="chapter-copy">
            <h2 id="business-title">Свои ошибки я тоже оплачивал сам.</h2>
            <p className="lead">
              Я дважды открывал веб-студии в Москве. Обе в итоге обанкротились.
              До этого моя самостоятельная работа росла: студии я открывал,
              чтобы расширить деятельность.
            </p>
            <p>
              Самые ощутимые удары случались, когда сотрудник не справлялся и
              просто уходил. Его незавершённые задачи оставались мне.
              Приходилось доделывать и свою работу, и его долги перед клиентами.
            </p>
            <p>
              Во второй раз я думал, что лучше понимаю проблему: смогу
              качественнее выбрать людей и организовать работу. Но и тогда всё
              оказалось сложнее. Личный темп и подход к делу нельзя просто
              перенести на каждого нового сотрудника.
            </p>
            <p className="statement">
              Уметь делать, уметь научить и уметь на этом заработать — разные
              задачи. Я знаю это и по удачам, и по потерям.
            </p>
            <p>
              Поэтому в разговорах о сайтах меня интересует вся цепочка:
              обещание, стоимость, исполнение, поддержка и результат для
              клиента. Технически работающий сайт — ещё не ответ на все вопросы
              бизнеса.
            </p>
          </div>
        </section>

        <section
          className="chapter-grid chapter"
          id="people"
          tabIndex={-1}
          aria-labelledby="people-title"
        >
          <div className="chapter-label">
            <p className="eyebrow">05 / Люди</p>
            <p className="side-note">
              Учить. Объединять.
              <br />
              Работать вместе.
            </p>
          </div>
          <div className="chapter-copy">
            <h2 id="people-title">За проектами всегда стоят люди.</h2>
            <h3>MODX-База: почти год вместе</h3>
            <p>
              В Москве я запускал офлайн-проект MODX-База. Ребята жили у меня и
              учились почти год. Один из них впоследствии стал senior
              Go-разработчиком в Польше. Звонил, говорил спасибо. Двое стали
              моими близкими друзьями, выросли до senior JS/TS и работали в
              Газпроме, X5 и других крупных компаниях.
            </p>
            <p>
              Дальше каждый прошёл собственный путь. Для меня эта история —
              важная часть опыта наставничества: видеть, как люди учатся,
              становятся самостоятельными и растут в профессии.
            </p>
            <h3>MODX-Клуб и Freecode.Academy</h3>
            <p>
              Я участвовал в развитии существующего MODX-сообщества, затем
              создал собственный Клуб. Уже во вступительном слове 2013 года
              писал о командной работе, документации и поддержке: клиент не
              должен оставаться один с сайтом, когда его разработчик исчезает.
            </p>
            <p>
              Позже проект прошёл путь от modxclub.ru через prisma-cms.com к
              Freecode.Academy. Тематика стала шире одной технологии. Сейчас я
              развиваю собственные инструменты и практику совместной работы с
              ИИ.
            </p>
            <p>
              Поэтому устройство сообществ, отношения между участниками и
              интересы владельцев площадок — для меня вопросы с многолетней
              личной историей.
            </p>
            <a
              className="text-link"
              href="https://freecode.academy/blog/club/3.html"
            >
              Вступительное слово · 17 марта 2013
            </a>
          </div>
        </section>

        <section
          className="chapter-grid chapter"
          id="history"
          tabIndex={-1}
          aria-labelledby="history-title"
        >
          <div className="chapter-label">
            <p className="eyebrow">06 / Публичный след</p>
            <p className="side-note">
              Разработки, тексты
              <br />и решения разных лет
            </p>
          </div>
          <div className="chapter-copy">
            <h2 id="history-title">Мою историю можно проследить.</h2>
            <ol className="timeline">
              <li>
                <span className="timeline-date">2012</span>
                <div>
                  <h3>modLivestreet</h3>
                  <p>
                    Объединил MODX Revolution и LiveStreet. Эта разработка
                    привела меня к обновлению community.modx-cms.ru.
                  </p>
                  <a href="https://habr.com/ru/articles/157135/">
                    Публикация о релизе
                  </a>
                </div>
              </li>
              <li>
                <span className="timeline-date">2013</span>
                <div>
                  <h3>Клуб и собственные компоненты</h3>
                  <p>
                    MODX-Клуб, shopModx и ShopModxBox. В каталоге MODX
                    сохранились мои разработки, включая Console и modxSite.
                    Позже появилась сборка NewsModxBox.
                  </p>
                  <a href="https://extras.modx.com/package/shopmodx">
                    shopModx в каталоге MODX
                  </a>
                </div>
              </li>
              <li>
                <span className="timeline-date">2019</span>
                <div>
                  <h3>Переход к Prisma CMS</h3>
                  <p>
                    9 апреля объявил о завершении прежнего формата Клуба и
                    переезде на prisma-cms.com. Старые материалы сохранил. Позже
                    сайт стал Freecode.Academy.
                  </p>
                  <a href="https://freecode.academy/topics/vse,-net-bolshe-vashego-modx-kluba.html">
                    Моё объявление о переходе
                  </a>
                </div>
              </li>
              <li>
                <span className="timeline-date">Сейчас</span>
                <div>
                  <h3>ИИ и развитие работающих систем</h3>
                  <p>
                    Развиваю haih-agent, работаю с памятью, инструментами и
                    интеграциями агентов. Модернизирую существующие сайты:
                    например, HappyBaby2000 с сохранением MODX-backend и
                    накопленных данных.
                  </p>
                  <a href="https://github.com/haih-net/agent">
                    Репозиторий haih-agent
                  </a>
                </div>
              </li>
            </ol>
            <details>
              <summary>Ещё публикации и свидетельства</summary>
              <ul className="source-list">
                <li>
                  <a href="https://fi1osof.ru/about">
                    Биография на личном сайте
                  </a>
                  <span>Работа и профессиональный путь.</span>
                </li>
                <li>
                  <a href="https://habr.com/ru/users/Fi1osof/articles/">
                    Мои публикации на Хабре
                  </a>
                  <span>Разборы, собственные инструменты и эксперименты.</span>
                </li>
                <li>
                  <a href="https://github.com/Fi1osof">Мой GitHub</a>
                  <span>Код и проекты.</span>
                </li>
                <li>
                  <a href="https://freecode.academy/blog/news/335.html">
                    Анонс мастер-класса 2014 года
                  </a>
                  <span>Обучение разработке магазина на ShopModxBox.</span>
                </li>
                <li>
                  <a href="https://modx.pro/news/18100">
                    Сообщение Василия Наумкина, апрель 2019
                  </a>
                  <span>
                    О закрытии Клуба в прежнем формате и моём вкладе в MODX.
                  </span>
                </li>
                <li>
                  <a href="https://modx.club/posts/kak-umiralo-modx-soobschestvo">
                    Как умирало MODX-сообщество
                  </a>
                  <span>Мой рассказ об этой истории с архивными ссылками.</span>
                </li>
                <li>
                  <a href="https://fi1osof.ru/">Текущая работа на fi1osof.ru</a>
                  <span>Проекты, задачи и инженерная практика.</span>
                </li>
              </ul>
            </details>
          </div>
        </section>

        <section
          className="closing"
          id="position"
          tabIndex={-1}
          aria-labelledby="closing-title"
        >
          <p className="eyebrow">Почему этот сайт существует</p>
          <h2 id="closing-title">
            Опыт — основание моей позиции.
            <br />
            Практика — способ идти дальше.
          </h2>
          <div className="closing-copy">
            <p className="lead">
              Я смотрю на перемены не только как программист. Я был
              исполнителем, заказчиком работы, руководителем, предпринимателем и
              наставником. Знаю, как решения выглядят в обещаниях и чего стоят в
              исполнении. При этом сам продолжаю работать с новыми
              инструментами.
            </p>
            <p>
              Когда-то я рассчитывал, что полезные публикации приведут из поиска
              клиентов и специалистов. Сегодня мои ожидания другие. Этот сайт —
              моя записная книжка: здесь я формулирую собственные оценки и
              проверяю, как действовать в изменившихся условиях. Прошлый опыт
              даёт мне основания судить, но не заменяет новых проверок.
            </p>
            <p>
              На главной — моя оценка того, что происходит с поиском, рекламой и
              положением владельца сайта. В дневнике — эксперимент «50 сайтов за
              месяц»: что я делаю в этих условиях и что из этого получается. За
              свои слова и решения здесь отвечаю я.
            </p>
            <div className="closing-links">
              <Link className="text-link" to="/">
                Моя позиция
              </Link>
              <Link className="text-link" to="/blog">
                Дневник эксперимента →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AboutStyled>
  )
}
