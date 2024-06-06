export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  nitro: { output: { publicDir: "dist" } },

  spaLoadingTemplate: false,

  app: {
    layoutTransition: false,
    pageTransition: false,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@vant/nuxt",
  ],

  eslint: { config: { standalone: false } },

  tailwindcss: { viewer: false },
})
