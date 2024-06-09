// import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SearchProducts = () => {
  const producttts = useLoaderData();
  const items = producttts.products;

  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter products based on brand and category
  const filteredProducts = items.filter(
    (product) =>
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="">
      <h1 className="text-red-400 text-center text-2xl font-bold my-6">
        All Search Products
      </h1>
      <div className="container mx-auto">
        {/* Search bar */}
        <div className="flex items-center justify-between bg-slate-100 border rounded-md mb-4 px-1 py-3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            placeholder="Search by brand or category..."
            className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none">
            Search
          </button>
        </div>

        <div className=" flex justify-between items-center flex-wrap">
          {filteredProducts.map((product, id) => {
            return (
              <div key={id}>
                <div className="w-[70%] h-[350px] border border-pink-400 bg-zinc-200 rounded-lg mb-5 p-3">
                  <img src={product.images[0]} className="w-[200px] height-[100px]" alt="" />
                  <h1>{product.title}</h1>
                  <h2>{product.price}</h2>
                  <h2>{product.category}</h2>
                  <h2>{product.brand}</h2>
                </div>

                <div className="w-[70%] h-[350px] border border-pink-400 bg-zinc-200 rounded-lg mb-5 p-3">
                  <img src={product.thumbnail} className="w-[200px] height-[100px]" alt="" />
                  <h1>{product.title}</h1>
                  <h2>{product.price}</h2>
                  <h2>{product.category}</h2>
                  <h2>{product.brand}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;
