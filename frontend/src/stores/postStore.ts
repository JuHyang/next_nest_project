import { create } from 'zustand'
import type { Post } from '@shared/types/post'

interface PostState {
    posts: Post[]
    fetchPosts: () => Promise<void>
    createPost: (post: Post) => Promise<void>
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    fetchPosts: async () => {
        const res = await fetch('http://localhost:3001/post', {
            cache: 'no-store',
        })
        if (!res.ok) {
            throw new Error('Failed to fetch posts')
        }
        const response = await res.json()
        set({ posts: response.posts })
    },

    createPost: async (post: Post) => {
        const res = await fetch('http://localhost:3001/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
            cache: 'no-store',
        })
        if (!res.ok) {
            throw new Error('Failed to create post')
        }
        const response = await res.json()
        set((state) => ({ posts: [...state.posts, response.post] }))
    }
}))
