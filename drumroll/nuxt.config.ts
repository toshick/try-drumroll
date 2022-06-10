import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  // rootDir: '.',
  css: ['@/assets/css/app.css'],

  // generate: {
  //   dir: './docs',
  // },

  app: {
    // https://github.com/nuxt/framework/issues/4484#issuecomment-1104912980
    // これにより相対パスが実現した
    baseURL: process.env.NODE_ENV === 'production' ? '/try-drumroll' : '/',
  },
  // router: {
  //   base: '/docs/',
  // },
  // build: {
  //   publicPath: './xxx/',
  // },
  // build: {
  //   extend(config, { isClient }) {
  //     // Extend only webpack config for client-bundle
  //     if (isClient) {
  //       // config.devtool = 'source-map';
  //       // config.buildAssetsDir = './_nuxt';
  //     }
  //     config.publicPath = './';
  //     console.log('config', config);
  //   },
  // },
});
