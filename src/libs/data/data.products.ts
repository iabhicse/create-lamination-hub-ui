const dummyProduct = {
  image: {
    src: "/images/product-images/product-image-01.jpg",
    alt: "Product 1",
  },
  link: "/",
  name: "Tech Accessories",
  description: "Personalize your digital lifestyle",
  price: 200,
};

export const productsList = Array(8)
  .fill(null)
  .map((_, i) => ({
    ...dummyProduct,
    uid: i.toString(),
    name: `${dummyProduct.name} ${i + 1}`,
    price: dummyProduct.price + i * 20,
    image: {
      ...dummyProduct.image,
      uid: i.toString(),
      alt: `Product ${i + 1}`,
      src: `/images/product-images/product-image-0${1}.jpg`,
    },
  }));
