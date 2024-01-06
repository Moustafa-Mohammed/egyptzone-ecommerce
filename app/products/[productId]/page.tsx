import { getSingleProduct } from "@/app/api/products";
import Card from "@/components/ui/ProductItem";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getSingleProduct(params.productId);
  return (
    <div className="container mx-auto max-w-5xl border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-screen">
      {/* <div>
        <img src="" alt="" />
      </div> */}
      <Card {...product} />
    </div>
  );
}
