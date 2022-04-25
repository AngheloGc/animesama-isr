export interface Post {
  excerpt: string
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
  slug: string
  title: string
  date: string
  id: string | number
}

export interface FetchApiParams {
  query: string
  options?: {
    variables?: any
  }
}

export interface GetPostsResponse {
  posts: {
    edges: ({ node: Post })[]
  }
}