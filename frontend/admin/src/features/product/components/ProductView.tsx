'use client'

type ProductViewProps = {
    name: string
    price: number
}

export default function ProductView({ name, price }: ProductViewProps) {
    return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-6 max-w-xl mx-auto mb-6 space-y-4 transition-colors">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                🛍️ Product Details
            </h2>

            <div>
                <h3 className="text-gray-600 dark:text-gray-400 text-sm">Name</h3>
                <p className="text-lg text-gray-900 dark:text-gray-100">{name}</p>
            </div>

            <div>
                <h3 className="text-gray-600 dark:text-gray-400 text-sm">Price</h3>
                <p className="text-lg text-gray-900 dark:text-gray-100">{price.toLocaleString()}원</p>
            </div>
        </div>
    )
}
