const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Iris',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IAT 343 Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/iris1.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Raleway:300'}, 
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=League+Script'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#c86b9' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-particles'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
        config.plugins.push(new BabiliPlugin())
        
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/bootstrap-vue'
  ],
  css: [
    '@/assets/scss/main.scss'
  ],
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false }
  ]
}
