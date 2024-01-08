import ProductList from "@/components/ui/ProductList";
import { getAllProducts } from "./api/products";
import { ProductProps } from "@/components/ui/ProductCard";
export default async function Home() {
  const products: ProductProps[] = await getAllProducts();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <ProductList products={products} />
    </div>
  );
}
