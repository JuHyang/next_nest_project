'use client'

import { useState, useEffect } from 'react'

type ProductFormProps = {
    initialValues?: {
        name: string
        price: number
    }
    onSubmit: (data: { name: string; price: number }) => void
    isPending?: boolean
    isError?: boolean
}

export default function ProductForm({
    initialValues = { name: '', price: 0 },
    onSubmit,
    isPending,
    isError,
}: ProductFormProps) {
    const [name, setName] = useState(initialValues.name)
    const [price, setPrice] = useState(initialValues.price)

    useEffect(() => {
        setName(initialValues.name)
        setPrice(initialValues.price)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return
        onSubmit({ name, price })
        setName('')
        setPrice(0)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-6 max-w-xl mx-auto mb-6 space-y-5 transition-colors"
        >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {initialValues.name ? '✏️ Edit Product' : '➕ Create a New Product'}
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Product Name
                </label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Product Price
                </label>
                <input
                    type="number"
                    min={0}
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition w-full"
            >
                {isPending
                    ? 'Saving...'
                    : initialValues.name
                        ? 'Update Product'
                        : 'Create Product'}
            </button>

            {isError && (
                <p className="text-sm text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}
        </form>
    )
}
