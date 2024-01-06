import { getProductsInCategory } from "@/app/api/products";
import ProductList from "@/components/ui/ProductList";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProductsInCategory(params.category);
  return <ProductList products={products} />;
}
