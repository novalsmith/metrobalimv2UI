// plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin((app) => {
  const primaryColor = '#1976D2'; // Warna biru standar Vuetify

  const light: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      'surface-bright': '#FFFFFF',
      'surface-light': '#EEEEEE',
      'surface-variant': '#424242',
      'on-surface-variant': '#EEEEEE',
      primary: '#1867C0',
      'primary-darken-1': '#1F5592',
      secondary: '#48A9A6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      toolbar: '#212121', // grey-darken-4
      subToolbar: '#424242', // grey-darken-3
      sidebar: '#424242', // grey-darken-3
      greyDarken4: '#212121', // grey-darken-4
      greyDarken3: '#424242', // grey-darken-3
    },
    variables: {
      'border-color': '#000000',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 0.87,
      'medium-emphasis-opacity': 0.60,
      'disabled-opacity': 0.38,
      'idle-opacity': 0.04,
      'hover-opacity': 0.04,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.12,
      'dragged-opacity': 0.08,
      'theme-kbd': '#212529',
      'theme-on-kbd': '#FFFFFF',
      'theme-code': '#F5F5F5',
      'theme-on-code': '#000000',
      'link-color': 'inherit', // Warna link default
      'link-hover-color': '#1976D2', // Warna link saat hover
    }
  };

  const dark: ThemeDefinition = {
    dark: true,
    colors: {
      background: '#121212',
      surface: '#1E1E1E',
      primary: primaryColor,
      'primary-darken-1': '#1565C0',
      secondary: '#424242',
      'secondary-darken-1': '#212121',
      error: '#CF6679',
      info: '#64B5F6',
      success: '#81C784',
      warning: '#FFB74D',
      onSurface: '#FFFFFF', // Warna teks untuk surface
      onBackground: '#FFFFFF', // Warna teks untuk background
      toolbar: '#424242', // grey-darken-4
      subToolbar: '#616161', // grey-darken-3
      sidebar: '#424242', // grey-darken-3
      greyDarken4: '#424242', // grey-darken-4
      greyDarken3: '#616161', // grey-darken-3
    },
    variables: {
      'text-field-bg-color': '#303030',
      'text-field-border-color': 'rgba(255, 255, 255, 0.12)',
      'text-field-focus-color': primaryColor,
      'text-field-color': '#FFFFFF',
      'link-color': 'inherit',
      'link-hover-color': '#64B5F6',
    },
  };

  const vuetify = createVuetify({
    defaults: {
      VAppBar: {},
      global: {
        ripple: true,
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
      defaultTheme: 'light',
      themes: {
        light,
        dark,
      },
    },
  });

  app.vueApp.use(vuetify);
});