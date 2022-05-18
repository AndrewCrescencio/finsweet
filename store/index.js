import { GET_POSTS } from '../graphql/query'

export const state = () => ({
  posts: [],
})

// your root getters
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
    return state.posts.filter((post) => post.slug === slug)
  },
}

// contains your actions
export const actions = {
  //   setPosts({ state, commit }) {
  //     commit('setPosts', state.posts)
  //   },
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
// contains your mutations
export const mutations = {
  setPosts(state, value) {
    state.posts = value
  },
}
