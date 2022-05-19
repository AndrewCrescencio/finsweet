export default {
  name: 'PagesPricing',
  data() {
    return {
      width: 0,
    }
  },
  mounted() {
    this.width = window.innerWidth
    window.addEventListener('resize', this.getDimensions)
  },
  computed: {
    updatewidth() {
      if (process.client) {
        const width = window.innerWidth
        return width
      } else {
        return null
      }
    },
    blurUrl() {
      if (process.client) {
        const mobileUrl = 'finsweet-blur-pricing-mobile'
        const desktopUrl = 'finsweet-blur-pricing-desktop.webp'
        const width = this.width
        return width > 1280 ? desktopUrl : mobileUrl
      }
    },
  },
  methods: {
    getDimensions() {
      this.width = window.innerWidth
    },
  },
}
