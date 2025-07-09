import { useMutation, useQueryClient } from '@tanstack/react-query'
import createProduct from '../services/createProduct'
import type { Product } from '../types'

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<Product, Error, { name: string; price: number }>({
    mutationFn: ({ name, price }) => createProduct(name, price),
    onSuccess: (newProduct) => {
      queryClient.setQueryData<Product[]>(['products'], (old = []) => [...old, newProduct])
    },
    onError: (error) => {
      console.error('Create product failed:', error)
    },
  })
}
