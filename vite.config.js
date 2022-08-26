import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import mkcert from'vite-plugin-mkcert'
export default defineConfig({
  plugins: [
    VitePWA({ injectRegister: 'script',registerType: 'autoUpdate', strategies: 'injectManifest', injectManifest: {globPatterns: ['**/*.html'] },  server: {
      https: true
    },
    plugins: [mkcert()] }) ,
    
  ]
 
})
