// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  sanity: {
    globalHelper: true,
    projectId: '3d3xmmde',
    dataset: 'production',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
  },
  modules: ['@nuxtjs/sanity']
})
