import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: ['/', '/blog'],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
