import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Cart, CartItem } from '../types'
import type { Product } from '@/features/product/types'

interface CartState {
    cart: Cart
    addCartItem: (product: Product) => void
    setCartItem: (item: CartItem) => void
    removeCartItem: (productId: string) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: { items: [] },

            addCartItem: (product) => {
                const { cart, setCartItem } = get()
                const existingItem = cart.items.find(
                    (item) => item.product.id === product.id
                )
                const newAmount = existingItem ? existingItem.amount + 1 : 1
                setCartItem({ product, amount: newAmount })
            },

            setCartItem: (item) => {
                set((state) => {
                    const exists = state.cart.items.some(
                        (cartItem) => cartItem.product.id === item.product.id
                    )

                    return {
                        cart: {
                            items: exists
                                ? state.cart.items.map((cartItem) =>
                                    cartItem.product.id === item.product.id ? { ...item } : cartItem
                                )
                                : [...state.cart.items, { ...item }],
                        },
                    }
                })
            },

            removeCartItem: (productId) =>
                set((state) => ({
                    cart: {
                        items: state.cart.items.filter(
                            (item) => item.product.id !== productId
                        ),
                    },
                })),

            clearCart: () => set({ cart: { items: [] } }),
        }),
        {
            name: 'cart-storage',
        }
    )
)
