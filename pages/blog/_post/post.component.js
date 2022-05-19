import { mapGetters } from 'vuex'
export default {
  name: 'PagesPost',
  computed: {
    ...mapGetters({ get: 'singlePost' }),
    post() {
      const slug = this.$route.params.post
      const post = this.get(slug)[0]
      return post
    },
  },
}
