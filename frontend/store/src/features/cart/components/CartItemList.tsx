'use client'

import type { CartItem } from '../types'
import CartItemView from './CartItemView'
import { useProductByIdQuery } from '@/features/product/hooks/useProductByIdQuery'

export default function CartItemList({ items }: { items: CartItem[] }) {
    if (!items || items.length === 0) {
        return (
            <div className="p-4">
                <h1 className="text-xl font-semibold">Cart is Empty</h1>
                <p className="text-gray-500">Your cart is currently empty. Please add items to your cart.</p>
            </div>
        )
    }

    // 상품 정보를 개별적으로 가져와서 모은 뒤 totalPrice 계산
    const productDataList = items.map((item) => {
        const query = useProductByIdQuery(item.product.id)
        return {
            item,
            product: query.data,
            isLoading: query.isLoading,
            isError: query.isError,
        }
    })

    const allLoaded = productDataList.every(({ product }) => product)
    const totalPrice = allLoaded
        ? productDataList.reduce((sum, { item, product }) => {
            return sum + (product?.price ?? 0) * item.amount
        }, 0)
        : 0

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold">🛒 Cart Items</h1>

            <ul className="space-y-4">
                {productDataList.map(({ item, product, isLoading, isError }) => (
                    <li key={item.product.id}>
                        <CartItemView
                            product={product}
                            amount={item.amount}
                            isLoading={isLoading}
                            isError={isError}
                        />
                    </li>
                ))}
            </ul>

            {/* ✅ 총합 표시 */}
            <div className="text-right border-t pt-4 mt-4">
                <p className="text-lg font-semibold">
                    Total:{' '}
                    <span className="text-blue-600">
                        {allLoaded ? totalPrice.toLocaleString() + '원' : '...계산 중'}
                    </span>
                </p>
            </div>
        </div>
    )
}
