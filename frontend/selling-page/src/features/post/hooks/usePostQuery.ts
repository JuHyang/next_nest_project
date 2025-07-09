// features/post/hooks/usePostQuery.ts
import { useQuery } from '@tanstack/react-query'
import fetchPosts from '../services/fetchPosts'

export const usePostQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5분 캐시
  })
}
