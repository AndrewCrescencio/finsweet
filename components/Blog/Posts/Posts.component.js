export default {
  name: 'BlogPosts',
  props: {
    posts: {
      type: Array,
      required: false,
    },
    trending: {
      type: Object,
      required: true,
    },
  },
}
