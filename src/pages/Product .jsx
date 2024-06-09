/* eslint-disable */
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, price, images, id } = product;

  return (
    <div className="w-[30%] h-[510px] border border-red-400 rounded-lg mb-7 p-5">
      <img src={images[1]} className="w-[100%] h-[350px] mb-2" alt="" />
      <h1 className="text-lg text-sky-700 font-medium">{title}</h1>
      <h2 className="text-lg text-sky-700 font-medium mb-3">{price}</h2>
      {/* <h2 className="text-lg text-sky-700 font-medium">{images[3]}</h2> */}
      <Link
        className="py-2 px-3 bg-yellow-600 rounded-lg"
        to={`/details/${id}`}
      >
        Detail
      </Link>
    </div>
  );
};

export default Product;
