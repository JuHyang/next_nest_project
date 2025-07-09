// features/post/hooks/usePostQuery.ts
import { useQuery } from '@tanstack/react-query'
import fetchProducts from '../services/fetchProducts'

export const useProductQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5분 캐시
  })
}
