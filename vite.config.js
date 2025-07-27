import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Updated config for React-only setup (no Tailwind)
export default defineConfig({
  plugins: [react()],
})
