// vite.config.ts (Add the server object)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // 👇 ADD THIS SECTION 👇
  server: {
    host: 'localhost', // Ensures it binds correctly to the host name
    port: 5173,       // Optional, but good practice
    // You could also try: host: '0.0.0.0' for max compatibility
  },
  // 👆 END ADDITION 👆
})