import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/',
    '/blog',
    '/about',
    '/blog/pochemu-ya-zapuskayu-etot-eksperiment',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
