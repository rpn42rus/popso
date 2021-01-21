export default {
  ssr: false,

  head: {
    title: 'popso',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/index.scss'],

  plugins: ['@/plugins/element-ui'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios'],

  axios: {},

  build: {
    transpile: [/^element-ui/],
  },
}
