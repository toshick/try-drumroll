import { defineNuxtConfig } from 'nuxt';

const isProd = process.env.NODE_ENV === 'production';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  css: ['@/assets/css/app.css'],

  app: {
    // https://github.com/nuxt/framework/issues/4484#issuecomment-1104912980
    // これにより相対パスが実現した
    baseURL: isProd ? '/try-drumroll' : '/',
    buildAssetsDir: 'mynuxt',
  },
});
