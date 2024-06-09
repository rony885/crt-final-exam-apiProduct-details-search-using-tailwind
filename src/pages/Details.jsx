// import React from 'react';
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const product = useLoaderData();
    return (
        <div className="bg-gray-400 p-4 mx-auto">
        <div className="w-[31%] border-2 border-green-700 p-5 bg-white rounded-xl mx-auto">
          <img src={product.images[0]} alt="img" />
          <h2 className="text-xl text-blue-600 font-semibold">
            price:{product.price}
          </h2>
          <h2 className="text-xl text-slate-800 font-semibold">
            category: {product.category}
          </h2>
        </div>
      </div>
    );
};

export default Details;
