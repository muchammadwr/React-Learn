/* eslint-disable react/jsx-key */
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
    delectus dolores facere tempora veritatis officia reiciendis tempore
    repellat ab velit ipsa alias exercitationem, perspiciatis et quia
    enim.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
    delectus dolores facere tempora veritatis officia reiciendis tempore
    repellat ab velit ipsa alias exercitationem.`,
  },

  {
    id: 3,
    name: "Sepatu Bekas",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    description: `Ini adalah sepatu bekas yang sangat bagus`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
