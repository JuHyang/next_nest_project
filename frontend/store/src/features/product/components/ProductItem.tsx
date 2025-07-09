import { useRouter } from 'next/navigation'
import type { Product } from '../types'
import { useCartStore } from '@/features/cart/store/cartStore'

export default function ProductItem({ product }: { product: Product }) {
    const router = useRouter()
    const addCartItem = useCartStore((state) => state.addCartItem)

    const handleClick = () => {
        router.push(`/store/${product.id}`)
    }

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation() // ✅ 카드 클릭 이벤트 방지

        addCartItem(product) // 장바구니에 추가
        console.log(`장바구니에 ${product.name} 추가됨`)

        // TODO: 카트 페이지로 이동할건지 물어보기
    }

    return (
        <li
            onClick={handleClick}
            className="cursor-pointer border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 mb-4 bg-white dark:bg-gray-800 transition hover:shadow-md"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {product.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ID: {product.id}</p>
                    <p className="text-base text-gray-800 dark:text-gray-200 mt-1">
                        💰 {product.price.toLocaleString()}원
                    </p>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow transition"
                >
                    장바구니
                </button>
            </div>
        </li>
    )
}
