import ProductList from "@/components/ui/ProductList";
import { getAllProducts } from "./api/products";
export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <ProductList products={products} />
    </div>
  );
}
