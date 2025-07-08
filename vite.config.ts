import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/page/', // (ou o base correto)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
