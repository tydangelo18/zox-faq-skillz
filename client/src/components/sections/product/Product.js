import React from "react";
import ProductTitle from "./title/ProductTitle";
import ProductQuestions from "./faqs/ProductQuestions";
import { productData } from "./utils/productfaqs";

const Product = () => {
  return (
    <div className="productSectionDiv">
      <ProductTitle />
      {productData.map(({ question, answer }) => (
        <ProductQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Product;
