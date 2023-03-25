/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  define: {
    global: {},
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    watch: {
      usePolling: true,
    },
  },

  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './setupTests.js',
  },
})
