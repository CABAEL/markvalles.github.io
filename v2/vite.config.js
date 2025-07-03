import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/markvalles.github.io/',
    build: {
    outDir: '../public',
    emptyOutDir: true,
    // rollupOptions: {
    //   output: {
    //     // Put assets inside /public
    //     entryFileNames: '[name].[hash].js',       
    //     chunkFileNames: '[name].[hash].js',
    //     assetFileNames: '[name].[hash][extname]',

    //   },
    // },

  }
})
