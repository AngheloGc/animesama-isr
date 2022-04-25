import { fetchAPI } from './wordpress'

export const getPosts = async () => {
  const data = await fetchAPI(`
    {
      posts(first: 10) {
        edges {
          node {
            excerpt(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            date
            id
          }
        }
      }
    }
  `)

  return data?.posts
}