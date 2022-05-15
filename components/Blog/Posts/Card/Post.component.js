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
      return `http://localhost:3000/blog/${this.post.slug}`
    },
  },
}
