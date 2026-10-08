import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'node:path'

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: resolve(import.meta.dirname, 'vite.config.ts'),
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
}

export default config
