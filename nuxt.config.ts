// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
})
