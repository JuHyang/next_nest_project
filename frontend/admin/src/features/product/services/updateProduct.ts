import type { UpdateProductInput } from "../types"
import { Product } from "../types"

export default async function updateProduct(id: number, name: string, price: number): Promise<Product> {
    console.log('updateProduct called with:', { id, name, price })
    const requestDto: UpdateProductInput = {
        id: id,
        name: name,
        price: price,
    }

    const res = await fetch(`http://localhost:3002/product/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestDto),
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to create post')
    }

    const response = await res.json()

    return response.product
}
