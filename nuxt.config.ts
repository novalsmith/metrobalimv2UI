import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/globals.scss' // Import SCSS Global
  ],
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxt/image-edge', // Hapus function dalam array modules
  ],

  vite: {
    plugins: [
      vuetify() // Pindahkan function ke sini
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // Konfigurasi IPX
  image: {
    provider: 'ipx', // Gunakan IPX sebagai penyedia gambar
    domains: ['answeredfaith.com', 'metrobalim.net'], // HANYA domain tanpa `https://`
    presets: {
      logo: {
        modifiers: {
          format: 'webp',
          quality: 60
        },
      },
      headlineMain: {
        modifiers: {
          format: 'webp',
          quality: 80
        },
      },
      headlineSub: {
        modifiers: {
          format: 'webp',
          quality: 80,
          height:120
        },
      },
      
      news: {
        modifiers: {
          format: 'webp',
          quality: 80,
          height: 400,
        },
      },
      article: {
        modifiers: {
          format: 'webp',
          quality: 70,
          height: 130
        },
      },
    },
  },
})
