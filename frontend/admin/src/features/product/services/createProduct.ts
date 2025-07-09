import type { CreateProductInput } from "../types"
import { Product } from "../types"

export default async function createProduct(name: string, price: number): Promise<Product> {
    const requestDto: CreateProductInput = {
        name: name,
        price: price,
    }

    const res = await fetch('http://localhost:3002/product', {
        method: 'POST',
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

    return response.post
}
