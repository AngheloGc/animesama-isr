export interface HomeProps {
  posts: Post[]
}

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