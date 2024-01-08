import ProductCard, { ProductProps } from "@/components/ui/ProductCard";

export default async function ProductList({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <div className="container mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {products?.map((product: ProductProps) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
