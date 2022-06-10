import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  css: ['@/assets/css/app.css'],

  generate: {
    dir: './docs',
  },
});
