import ProductSkeleton from "@/components/ProductSkeleton";

export default function Loading() {
  const skeletons = Array(10).fill(100);

  return (
    <div className="container mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-5">
      {skeletons.map((s) => {
        return <ProductSkeleton key={s} />;
      })}
    </div>
  );
}
