// features/post/hooks/useCreatePostMutation.ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import createPost from '../services/createPost'
import type { Post } from '../types'

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<Post, Error, { title: string; content: string }>({
    mutationFn: ({ title, content }) => createPost(title, content),
    onSuccess: (newPost) => {
      // ✅ 기존 posts 캐시를 직접 갱신하거나 invalidate
      queryClient.setQueryData<Post[]>(['posts'], (old = []) => [...old, newPost])
      // 또는
      // queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: (error) => {
      console.error('Create post failed:', error)
    },
  })
}
