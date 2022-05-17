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
      cover {
        url
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GET_POST_BY_SLUG($slug: String!) {
    posts(where: { slug: $slug }) {
      title
      slug
      content
      author {
        name: displayName
      }
      cover {
        url
      }
    }
  }
`
