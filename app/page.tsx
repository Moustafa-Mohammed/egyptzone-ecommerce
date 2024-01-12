import ProductList from "@/components/ProductList";
import { getAllProducts } from "./api/products";
import { ProductProps } from "@/components/ProductCard";
export default async function Home() {
  const products: ProductProps[] = await getAllProducts();

  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <ProductList products={products} />
    </div>
  );
}
