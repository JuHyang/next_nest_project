'use client'

import { useState, useEffect } from 'react'
import { use } from 'react'

import ProductForm from "@/features/product/components/ProductForm"
import ProductView from "@/features/product/components/ProductView"
import { useProductByIdQuery } from "@/features/product/hooks/useProductByIdQuery"
import { useUpdateProductMutation } from '@/features/product/hooks/useUpdateProductMutation'

type DetailPageParams = {
    id: number
}

export default function DetailPage({ params }: { params: Promise<DetailPageParams> }) {
    const { id } = use(params)
    const [editMode, setEditMode] = useState(false)

    const { data: product, isLoading } = useProductByIdQuery(Number(id))
    const {
        data: updatedProduct,
        mutate,
        isPending,
        isError,
    } = useUpdateProductMutation()

    // ✅ 수정 완료된 최신 product를 기억하는 상태
    const [currentProduct, setCurrentProduct] = useState<typeof product | null>(null)

    // ✅ 업데이트 성공 시, updatedProduct를 currentProduct에 반영
    useEffect(() => {
        if (updatedProduct) {
            setCurrentProduct(updatedProduct)
        }
    }, [updatedProduct])

    if (isLoading) return <div>Loading...</div>
    if (!product) return <div>Product not found</div>

    // ✅ 뷰 모드에서 보여줄 데이터 선택 (updated → original)
    const displayProduct = currentProduct || product

    return (
        <div className="p-6 max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Product Detail</h1>
                <button
                    onClick={() => setEditMode((prev) => !prev)}
                    className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    {editMode ? 'Cancel' : 'Edit'}
                </button>
            </div>

            {editMode ? (
                <ProductForm
                    initialValues={{ name: displayProduct.name, price: displayProduct.price }}
                    onSubmit={(data) => {
                        mutate({
                            id: product.id,
                            name: data.name,
                            price: data.price,
                        })
                        setEditMode(false)
                    }}
                    isPending={isPending}
                    isError={isError}
                />
            ) : (
                <ProductView name={displayProduct.name} price={displayProduct.price} />
            )}
        </div>
    )
}
