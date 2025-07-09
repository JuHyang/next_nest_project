import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateProduct from '../services/updateProduct'
import type { Product } from '../types'

export const useUpdateProductMutation = () => {
    const queryClient = useQueryClient()

    return useMutation<Product, Error, { id: number, name: string; price: number }>({
        mutationFn: ({ id, name, price }) => updateProduct(id, name, price),
        onSuccess: (newProduct) => {
            queryClient.setQueryData<Product[]>(['products'], (old = []) => [...old, newProduct])
        },
        onError: (error) => {
            console.error('Create product failed:', error)
        },
    })
}
