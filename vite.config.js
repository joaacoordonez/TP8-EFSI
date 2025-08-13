import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'TP8-EFSI',
  homepage: 'https://github.com/joaacoordonez/TP8-EFSI'
})
