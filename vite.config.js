import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    needsInterop: dns,
  },
  plugins: [vue(), dns],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // Host helps the host machine connect to the internal docker port
    host: '0.0.0.0',
    port: 8080
  },
})
