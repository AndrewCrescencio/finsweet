import { mapGetters } from 'vuex'
export default {
  name: 'PagesPost',
  computed: {
    ...mapGetters({ getPost: 'singlePost' }),
    post() {
      const slug = this.$route.params.post
      return this.getPost(slug)[0]
    },
  },
}
