import { create } from 'zustand'
import type { Post } from '../types'
import createPost from '../services/createPost'

interface PostState {
    posts: Post[]
    setPosts: (posts: Post[]) => void
    createPost: (title: string, content: string) => Promise<void>
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
    createPost: async (title: string, content: string) => {
        const createdPost = await createPost(title, content)

        set((state) => ({ posts: [...state.posts, createdPost] }))
    }
}))
