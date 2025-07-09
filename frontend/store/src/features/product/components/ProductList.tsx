import type { Product } from '@/features/product/types';
import ProductItem from './ProductItem';

export default function ProductList({ products }: { products: Product[] }) {

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
