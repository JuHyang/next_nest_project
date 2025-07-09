'use client'

import CartItemList from './CartItemList';
import { useCartStore } from '@/features/cart/store/cartStore';

export default function CartView() {
    const cart = useCartStore((state) => state.cart);

    console.log('🛒 CartView Rendered', cart);

    if (!cart || cart.items.length === 0) {
        return (
            <div>
                <h1>Cart is Empty</h1>
                <p>Your cart is currently empty. Please add items to your cart.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Cart Page</h1>
            <p>This is the cart page content.</p>
            <CartItemList items={cart.items} />
        </div>
    );
}
