// features/post/hooks/useProductByIdQuery.ts
import { useQuery } from '@tanstack/react-query';
import fetchProductById from '../services/fetchProductById';

export const useProductByIdQuery = (id: number) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id),
        enabled: !!id, // id가 존재할 때만 실행
        staleTime: 1000 * 60 * 5, // 5분 캐시
    });
};
