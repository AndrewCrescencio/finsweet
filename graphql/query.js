// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'

export const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      title
      excerpt
      author {
        name: displayName
      }
      slug
      content
      cover {
        url
      }
    }
  }
`
