'use client'

import { useEffect } from "react";
import { useProductQuery } from "@/features/product/hooks/useProductQuery";
import ProductList from "@/features/product/components/ProductList";

export default function StorePage() {
    const { data, isLoading, isError } = useProductQuery();

    useEffect(() => {
        if (data) {
            // Handle the fetched product data as needed
            console.log("Fetched products:", data);
        }
    }, [data]);

    if (isLoading) return <p>Loading products...</p>;
    if (isError) return <p>Failed to load products</p>;

    return (
        <div>
            <h1>Product Page</h1>
            <p>This is the product page content.</p>
            <ProductList products={data || []} />
        </div>
    );
}
