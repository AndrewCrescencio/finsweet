import { GET_POSTS } from '../../graphql/query'
// eslint-disable-next-line import/no-named-as-default
export default {
  name: 'Blog',

  data() {
    return {
      posts: [],
    }
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const posts = await client
      .query({
        query: GET_POSTS,
        prefetch: true,
      })
      .then(({ data }) => data && data.posts)
    return { posts }
  },
  computed: {
    trendingPost() {
      return this.posts[0]
    },
    filteredPosts() {
      const posts = this.posts.slice(1)
      return posts
    },
  },
}
