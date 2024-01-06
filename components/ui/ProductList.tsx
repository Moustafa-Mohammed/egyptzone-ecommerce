import Card from "@/components/ui/ProductItem";

export default async function ProductList({
  products,
}: {
  products: object[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {products?.map((product: object) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}
