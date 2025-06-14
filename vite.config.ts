import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          cesium: ['cesium']
        }
      }
    }
  }
})
