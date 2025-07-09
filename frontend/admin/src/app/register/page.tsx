'use client'

import ProductForm from "@/features/product/components/ProductForm";
import { useCreateProductMutation } from "@/features/product/hooks/useCreateProductMutation";

export default function RegisterPage() {
    const { mutate, isPending, isError } = useCreateProductMutation();

    return (
        <div>
            <ProductForm
                onSubmit={(data) => mutate(data)}
                isPending={isPending}
                isError={isError}
            />
        </div>
    );
}
