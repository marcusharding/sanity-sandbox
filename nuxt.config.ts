// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  sanity: {
    globalHelper: true,
    projectId: 'l202cs32',
    dataset: 'production',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
  },
  modules: ['@nuxtjs/sanity']
})
