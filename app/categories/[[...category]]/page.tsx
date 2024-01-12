import { getProductsInCategory } from "@/app/api/products";
import ProductList from "@/components/ProductList";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProductsInCategory(params.category);
  console.log(params);
  return <ProductList products={products} />;
}
