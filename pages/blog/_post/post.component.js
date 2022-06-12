import { GET_POST_BY_SLUG } from '../../../graphql/query'

export default {
  name: 'PagesPost',
  data() {
    return {
      posts: [],
    }
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient
    const { post } = params

    const res = await client.query({
      query: GET_POST_BY_SLUG,
      prefetch: true,
      variables: {
        slug: post,
      },
    })

    const { posts } = res.data

    return {
      posts,
    }
  },
  computed: {
    post() {
      return this.posts[0]
    },
  },
}
