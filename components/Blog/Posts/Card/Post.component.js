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
      return `https://fins-blog.herokuapp.com/graphql/${this.post.slug}`
    },
  },
}
