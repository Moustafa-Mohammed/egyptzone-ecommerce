export const getAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw Error("Could not get the products");
  }

  return response.json();
};

export const getSingleProduct = async (productId: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (!response.ok) {
    throw Error("Could not get the products");
  }

  return response.json();
};
export const getProductsInCategory = async (category: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!response.ok) {
    throw Error("Could not get the products");
  }

  return response.json();
};
