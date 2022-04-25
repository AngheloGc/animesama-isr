import { GetPostsResponse } from './interfaces'
import { fetchAPI } from './wordpress'

export const getPosts = async () => {
  const data = await fetchAPI<GetPostsResponse>({
    query: `
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
    `
  })

  return data?.posts
}