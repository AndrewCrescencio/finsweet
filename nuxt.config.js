export default {
  target: 'static',
  head: {
    title: 'Finsweet',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Finsweet',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Finsweet',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Finsweet',
      },
      {
        hid: 'description',
        name: 'description',
        content: "Finsweet's website",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "Finsweet's website",
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://nuxt-finsweet.netlify.app/_nuxt/image/213a52.svg',
      },
      {
        hid: 'og-url',
        property: 'og:url',
        content: 'https://nuxt-finsweet.netlify.app/',
      },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  /*
   ** Global CSS
   */
  css: [
    // '@/assets/scss/custom.scss',
    '@/assets/fonts/fonts.css',
    '@/assets/css/animated.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  components: true,
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://fins-blog.herokuapp.com/graphql',
      },
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.CLOUD_API_KEY,
    useComponent: true,
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/apollo',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/image',
    '@nuxtjs/cloudinary',
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BCollapse',

    ],
    directives: [
      'VBToggle',
    ],
  },
  axios: {},
  styleResources: {
    scss: './assets/scss/vendor.scss',
  },
  build: {
    extractCSS: true,
    babel: {
      compact: true,
    },
  },
  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  serverMiddleware: [],
}
