export default {
  name: 'Trending',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    trendingLink() {
      return `/blog/${this.post.slug}`
    },
  },
}
