export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'project1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  axios: {
    // baseURL: 'http://localhost:3000/api'
    baseURL: 'https://nuxt-tes.herokuapp.com/api'
  },

  // server: {
  //   host: 'https://nuxt-tes.herokuapp.com/', // default: localhost,
  //   timing: false
  // },

  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
