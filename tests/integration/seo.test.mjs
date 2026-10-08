import { test, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { author, canonicalUrl } from '../../app/components/seo/site.ts'

const read = (path) =>
  readFileSync(
    new URL(
      `../../build/client${path === '/' ? '' : path}/index.html`,
      import.meta.url,
    ),
    'utf8',
  )

test('публичные страницы предрендерены с русским содержанием, своими метаданными и извлечённым CSS', () => {
  const titles = new Set()
  const sitemap = readFileSync(
    new URL('../../build/client/sitemap.xml', import.meta.url),
    'utf8',
  )
  for (const path of [
    '/',
    '/blog',
    '/about',
    '/blog/pochemu-ya-zapuskayu-etot-eksperiment',
  ]) {
    const html = read(path)
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
    expect(html).toContain('lang="ru"')
    expect((html.match(/<h1[ >]/g) || []).length).toBe(1)
    expect(head).toContain(`rel="canonical" href="${canonicalUrl(path)}"`)
    expect(head).not.toContain('https://haih.site')
    if (path === '/about') {
      expect(head).toContain('og:image')
      expect(head).toContain('nikolai-lanets-')
      expect(html).toContain('Николай Ланец')
      expect(html).toContain('width="800" height="930"')
    } else {
      expect(head).not.toContain('og:image')
    }
    titles.add(head.match(/<title>(.*?)<\/title>/)[1])
    const graph = JSON.parse(
      head.match(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      )[1],
    )['@graph']
    expect(
      graph
        .filter((entry) => ['WebSite', 'WebPage'].includes(entry['@type']))
        .every((entry) => entry.inLanguage === 'ru'),
    ).toBe(true)
    if (path.startsWith('/blog/')) {
      const article = graph.find((entry) => entry['@type'] === 'BlogPosting')
      expect(article.headline).toBe('Почему я запускаю этот эксперимент')
      expect(article.datePublished).toBe('2026-10-08')
      expect(article.author.name).toBe(author.name)
      expect(article.citation[0]).toContain('fi1osof.ru/projects/')
      expect(head).not.toContain('HAIH')
      expect(html).toContain('27 августа')
    }
    const css = [...head.matchAll(/href="(\/assets\/[^" ]+\.css)"/g)]
    expect(css.length).toBeGreaterThan(0)
    for (const [, asset] of css)
      expect(
        existsSync(new URL(`../../build/client${asset}`, import.meta.url)),
      ).toBe(true)
    expect(sitemap).toContain(canonicalUrl(path))
  }
  expect(titles.size).toBe(4)
  expect(sitemap).not.toContain('/solutions')
  expect(read('/')).toContain('Серьезно. Никак.')
})
