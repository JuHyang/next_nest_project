'use client'

import { useEffect } from "react";
import { useProductQuery } from "@/features/product/hooks/useProductQuery";
import ProductList from "@/features/product/components/ProductList";

export default function ProductPage() {
    const { data, isLoading, isError } = useProductQuery();

    useEffect(() => {
        if (data) {
            console.log("Fetched products:", data);
        }
    }, [data]);

    if (isLoading) return <p className="text-gray-500">Loading products...</p>;
    if (isError) return <p className="text-red-500">Failed to load products</p>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                🛍️ Product List
            </h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
                Browse all available products below.
            </p>
            <ProductList products={data || []} />
        </div>
    );
}
