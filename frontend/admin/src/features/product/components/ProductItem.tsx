import { useRouter } from 'next/navigation'
import type { Product } from '../types'

export default function ProductItem({ product }: { product: Product }) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/product/${product.id}`)
    }

    return (
        <li
            onClick={handleClick}
            className="cursor-pointer border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 mb-4 bg-white dark:bg-gray-800 transition hover:shadow-md"
        >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {product.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">ID: {product.id}</p>
            <p className="text-base text-gray-800 dark:text-gray-200 mt-1">
                💰 {product.price.toLocaleString()}원
            </p>
        </li>
    )
}
