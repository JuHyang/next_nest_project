import { create } from 'zustand'
import type { Post } from '../types'
import fetchPosts from '../services/fetchPosts'
import createPost from '../services/createPost'

interface PostState {
    posts: Post[]
    fetchPosts: () => Promise<void>
    createPost: (title: string, content: string) => Promise<void>
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    fetchPosts: async () => {
        const posts = await fetchPosts()
        set({ posts })
    },

    createPost: async (title: string, content: string) => {
        const createdPost = await createPost(title, content)

        set((state) => ({ posts: [...state.posts, createdPost] }))
    }
}))
