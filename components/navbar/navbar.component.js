import NavbarButton from '../navbarButton'
export default {
  name: 'Navbar',
  components: { NavbarButton },
  data() {
    return {
      menuOpen: false,
      isMobile: false,
      limitWidthDesktop: 1084,
    }
  },
  computed: {},
  mounted() {
    this.toggleHeader()
    this.setIsMobile()
    window.addEventListener('scroll', this.toggleHeader)
    window.addEventListener('resize', this.setIsMobile)
  },
  methods: {
    setIsMobile() {
      this.isMobile = window.innerWidth <= this.limitWidthDesktop
    },
    toggleHeader() {
      const header = document.querySelector('#main-header')
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (header) {
        if (st >= 80) {
          if (st > this.lastScrollTop) {
            header.classList.remove('roll')
          } else {
            header.classList.add('roll')
          }
          this.lastScrollTop = st <= 0 ? 0 : st
        } else {
          header.classList.add('roll')
        }

        if (this.menuOpen) {
          header.classList.add('roll')
        }
      }
    },
    toggleMenu() {
      const w = window.innerWidth
      if (w <= this.limitWidthDesktop) {
        this.menuOpen = !this.menuOpen
      }
    },
  },
}
