export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: string
  category: string
  tags: string[]
  gradient: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = []
