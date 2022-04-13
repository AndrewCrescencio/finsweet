export default {
  name: 'NavbarButton',
  props: {
    handler: {
      type: Function,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    fn() {
      if (this.handler) this.handler()
    },
  },
}
