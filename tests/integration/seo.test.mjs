import { test, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { canonicalUrl } from '../../app/components/seo/site.ts'

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
  for (const path of ['/', '/blog']) {
    const html = read(path)
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
    expect(html).toContain('lang="ru"')
    expect((html.match(/<h1[ >]/g) || []).length).toBe(1)
    expect(head).toContain(`rel="canonical" href="${canonicalUrl(path)}"`)
    expect(head).not.toContain('https://haih.site')
    expect(head).not.toContain('og:image')
    titles.add(head.match(/<title>(.*?)<\/title>/)[1])
    const graph = JSON.parse(
      head.match(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      )[1],
    )['@graph']
    expect(graph.every((entry) => entry.inLanguage === 'ru')).toBe(true)
    const css = [...head.matchAll(/href="(\/assets\/[^" ]+\.css)"/g)]
    expect(css.length).toBeGreaterThan(0)
    for (const [, asset] of css)
      expect(
        existsSync(new URL(`../../build/client${asset}`, import.meta.url)),
      ).toBe(true)
    expect(sitemap).toContain(canonicalUrl(path))
  }
  expect(titles.size).toBe(2)
  expect(sitemap).not.toContain('/solutions')
  expect(read('/')).toContain('Серьезно. Никак.')
})
