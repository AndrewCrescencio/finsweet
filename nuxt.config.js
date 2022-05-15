export default {
  target: 'static',
  head: {
    title: 'Nuxt Boilerplate',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
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
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/apollo',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt', '@nuxt/image'],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BModal',
      'BButton',
      'BForm',
      'BFormRow',
      'BFormGroup',
      'BFormInput',
      'BFormSelect',
      'BFormCheckbox',
      'BFormCheckboxGroup',
      'BFormTextarea',
      'BCollapse',
      'BCard',
      'BCardHeader',
      'BCardText',
      'BCardBody',
    ],
    directives: [
      'VBModal',
      'VBPopover',
      'VBTooltip',
      'VBScrollspy',
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
