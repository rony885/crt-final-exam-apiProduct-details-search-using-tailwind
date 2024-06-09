import { useLoaderData } from "react-router-dom";
import Product from "./Product ";

const Products = () => {
  const data = useLoaderData();
  const allProducts = data.products;

  return (
    <div>
      <h1 className="text-red-400 text-center text-2xl font-bold my-6">
        All Products
      </h1>
      <div className="container mx-auto">
        <div className=" flex justify-between items-center flex-wrap">
          {allProducts.map((product, i) => (
            <Product key={i} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
