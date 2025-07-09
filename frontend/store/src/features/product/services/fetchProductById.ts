export default async function fetchProductById(id: number) {
    const res = await fetch(`http://localhost:3002/product/${id}`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        console.log('Failed to fetch products:', res.status, res.statusText);
        throw new Error('Failed to fetch products')
    }
    const data = await res.json();

    return data.product;
}
