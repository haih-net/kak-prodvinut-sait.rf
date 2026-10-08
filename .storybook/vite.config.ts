import { defineConfig } from 'vite'
import wyw from '@wyw-in-js/vite'

// Storybook собирает компоненты, а не маршруты приложения.
export default defineConfig({
  plugins: [wyw({ include: ['**/*.{ts,tsx}'] })],
})
