import { products } from "@/view/product/data";
import React from "react";
import ProductImgCard from "./ProductImgCard";

const ProductsWrapper = () => {
  return (
    <div className="grid grid-cols-1 justify-center py-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <ProductImgCard
            bg={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductsWrapper;
