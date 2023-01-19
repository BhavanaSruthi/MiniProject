import React, { useState } from "react";
import ProductItem from "./ProductItem";
export default function ProductList({ products, getEventById }) {
  return (
    <div className="d-flex flex-wrap align-items-center ">
      {products.map((product) => (
        <ProductItem product={product} getEventById={getEventById} />
      ))}
    </div>
  );
}
