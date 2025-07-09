import type { Product } from '@/features/product/types';

export interface Cart {
  items: CartItem[]
}

export interface CartItem {
  product: Product
  amount: number
}
