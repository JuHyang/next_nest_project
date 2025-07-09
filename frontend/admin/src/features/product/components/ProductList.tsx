import type { Product } from "@/features/product/types";
import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">No products available</p>;
  }

  return (
    <ul className="space-y-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
