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
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
    '@/assets/css/main.css'
  ]
}
