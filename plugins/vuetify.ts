// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import '~/assets/globals.scss'; // Import SCSS Global


export default defineNuxtPlugin((app) => {

  const light: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF',  // Warna latar belakang terang
      surface: '#FFFFFF',     // Warna permukaan terang
      primary: '#2C3E50',      // Warna biru gelap utama (Nuxt)
      'primary-darken-1': '#34495E', // Biru lebih gelap
      secondary: '#1ABC9C',   // Warna hijau kebiruan untuk sekunder
      'secondary-darken-1': '#16A085', // Hijau gelap
      error: '#E74C3C',        // Merah untuk error
      info: '#3498DB',         // Biru untuk info
      success: '#2ECC71',      // Hijau untuk sukses
      warning: '#F39C12',      // Kuning untuk peringatan,
      red: '#E74C3C',        // Merah untuk error
    },
  };

  const dark: ThemeDefinition = {
    dark: true,
    colors: {
      background: 'rgb(12, 16, 23)',
        surface: 'rgb(30, 33, 38)',   // Warna permukaan gelap
      primary: '#ECF0F1',      // Warna abu-abu muda untuk primary
      'primary-darken-1': '#BDC3C7', // Abu-abu gelap untuk primary
      secondary: '#1ABC9C',   // Warna hijau kebiruan untuk sekunder
      'secondary-darken-1': '#16A085', // Hijau gelap
      error: '#E74C3C',        // Merah untuk error
      info: '#3498DB',         // Biru untuk info
      success: '#2ECC71',      // Hijau untuk sukses
      warning: '#F39C12',      // Kuning untuk peringatan
      red: '#E74C3C',        // Merah untuk error
    },
    variables: {
      'text-field-bg-color': 'rgb(145, 163, 192)', // Latar belakang
      'text-field-border-color': 'rgba(181, 181, 181, 0.12)', // Warna border default
      'text-field-focus-color': '#1ABC9C', // Warna fokus
      'text-field-color': '#FFFFFF', // Warna teks
  },
  };

  const vuetify = createVuetify({
    defaults: { 
      VAppBar: {
        // density: 'compact', // Padatan elemen pada AppBar
        // flat: false,
        // style: {
        //   borderBottom: '1px solid #BDC3C7',  // Menambahkan border-bottom warna abu-abu
        // },         // Tampilan datar tanpa bayangan
      },
      // VBtn: {
      //   size: 'small',      // Ukuran tombol kecil
      // },
      // VTextField: {
      //   density: 'comfortable', // Ukuran input field lebih kecil
      // },
      global: {
        ripple: false,      // Nonaktifkan efek ripple
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    ssr: true,
    blueprint: md3,
    theme: {
      defaultTheme: 'light', // Default light theme
      themes: {
        light,
        dark, // Dark theme untuk mode gelap
      },
    },
  });

  app.vueApp.use(vuetify);
});
