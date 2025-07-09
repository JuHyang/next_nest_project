'use client'

import type { Product } from '@/features/product/types'
import { useCartStore } from '../store/cartStore'
import { useState, useEffect } from 'react'

interface Props {
    product?: Product
    amount: number
    isLoading: boolean
    isError: boolean
}

export default function CartItemView({ product, amount, isLoading, isError }: Props) {
    const removeCartItem = useCartStore((state) => state.removeCartItem)
    const setCartItem = useCartStore((state) => state.setCartItem)

    const [localAmount, setLocalAmount] = useState(amount)

    useEffect(() => {
        if (product && localAmount !== amount) {
            setCartItem({ product, amount: localAmount })
        }
    }, [localAmount])

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (product) removeCartItem(product.id)
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (!Number.isNaN(value) && value >= 1) {
            setLocalAmount(value)
        }
    }

    if (isLoading) {
        return <div className="p-4 text-gray-500">Loading product...</div>
    }

    if (isError || !product) {
        return <div className="p-4 text-red-500">Failed to load product</div>
    }

    const totalPrice = product.price * localAmount

    return (
        <div className="cart-item border p-4 rounded-md shadow-sm mb-3 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {product.name}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                💵 Unit Price: {product.price.toLocaleString()}원
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                🧮 Total: {totalPrice.toLocaleString()}원
            </p>

            <div className="flex items-center gap-2 mt-2">
                <label className="text-sm text-gray-700 dark:text-gray-300">Quantity:</label>
                <input
                    type="number"
                    min={1}
                    value={localAmount}
                    onChange={handleQuantityChange}
                    className="w-20 px-2 py-1 border rounded"
                />
                <button
                    onClick={handleRemove}
                    className="ml-auto px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
                >
                    Remove
                </button>
            </div>
        </div>
    )
}
