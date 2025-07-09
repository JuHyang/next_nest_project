export interface CreatePostInput {
  title: string

  content: string
}

export interface Post {
  id: string

  title: string

  content: string

  createdAt: Date
}
