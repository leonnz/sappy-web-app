import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Remove base path for Vercel deployment - serves from root
  // base: '/sappy/', // Only needed for GitHub Pages
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    },
    proxy: {
      '/api': {
        target: 'https://az-api-iwn-hackathon-demo-b0exa5duacasdpc0.australiasoutheast-01.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true
      }
    }
  },
  optimizeDeps: {
    exclude: ['@tensorflow/tfjs-tflite']
  }
})
