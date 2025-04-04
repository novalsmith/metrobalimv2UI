import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2025-01-01',
   css: [
    '~/assets/css/main.css', // Import SCSS Global,
    '~/assets/globals.scss' // Import SCSS Global

  ],
  build: {
    transpile: ['vuetify'],
  },

  modules: [// Hapus function dalam array modules
  '@nuxt/image-edge', '@nuxt/scripts', '@pinia/nuxt'],

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
          quality: 80,
          width:200
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
      ads: {
        modifiers: {
          format: 'webp',
          quality: 80,
          height: 200
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.BASE_URL,
    },
  },
})