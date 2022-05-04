export default {
  name: 'PagesBlog',
  asyncData({ isDev, redirect }) {
    if (!isDev) {
      redirect({ name: 'index' })
    }
  },
}
