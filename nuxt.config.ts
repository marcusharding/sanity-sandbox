// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  sanity: {
    globalHelper: true,
    projectId: 'l202cs32',
    token: 'skn2H30YylmoJaE83LBlmdQtaF8sbCGLFpX7ILFhbAR4zhQ1Lw2eGAvDpiQIvIy2gUPkuPk51rK6pprMYqSkD5Fznfe1cnRhvHNJRgI0TvWlHgX8f8JIQRax3rY5la4JZvRGALM6TVCOeZXSSwx7XWTihVBXp4dJIiA45FlmSwUSOOcD4WXu',
    dataset: 'production',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
  },
  modules: ['@nuxtjs/sanity']
})
