'use client'

import ProductItem from "@/features/product/components/ProductItem";
import { useProductByIdQuery } from "@/features/product/hooks/useProductByIdQuery";
import { use, useEffect } from "react";

type DetailPageParams = {
    id: number
}

export default function DetailPage({ params }: { params: Promise<DetailPageParams> }) {
    const { id } = use(params)
    const { data, isLoading, isError } = useProductByIdQuery(Number(id));

    useEffect(() => {
        if (data) {
            // Handle the fetched product data as needed
            console.log("Fetched product:", data);
        }
    }, [data]);

    if (isLoading) return <p>Loading product...</p>;
    if (isError) return <p>Failed to load product</p>;

    return (
        <div>
            <h1>Store Detail Page</h1>
            <p>This is the detail page for the store.</p>
            <ProductItem product={data} />
            {/* You can add more content or components here as needed */}
        </div>
    );
}
