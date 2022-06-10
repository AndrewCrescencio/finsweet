import { GET_POSTS } from '../graphql/query'

export const state = () => ({
  posts: [],
})

export const getters = {
  getPosts(state) {
    return state.posts
  },
  trendingPost(state) {
    const trending = state.posts.filter((post) => {
      return post.slug === 'new-invoicing-features-to-help-you-get-paid-faster'
    })
    return trending
  },
  singlePost: (state) => (slug) => {
    // eslint-disable-next-line eqeqeq
    return state.posts.filter((post) => post.slug == slug)
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    const client = app.apolloProvider.defaultClient
    const posts = await client
      .query({
        query: GET_POSTS,
        prefetch: true,
      })
      .then(({ data }) => data && data.posts)
    commit('setPosts', posts)
  },
}

export const mutations = {
  setPosts(state, value) {
    state.posts = value
  },
}
