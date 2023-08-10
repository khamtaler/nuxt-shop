// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@vueuse/nuxt',
  ],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  buildModules: ['@nuxt/typescript-build'],
})
