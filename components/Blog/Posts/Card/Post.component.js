export default {
  name: 'BlogPostsCard',
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  computed: {
    postUrl() {
      return `/blog/${this.post.slug}`
    },
  },
}
