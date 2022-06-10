import { mapGetters } from 'vuex'

export default {
  name: 'BlogPosts',
  computed: {
    ...mapGetters(['trendingPost', 'getPosts']),
    trending() {
      return this.trendingPost[0]
    },
    posts() {
      return this.getPosts.slice(1)
    },
  },
}
