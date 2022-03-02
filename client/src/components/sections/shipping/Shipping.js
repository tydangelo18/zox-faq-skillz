import React from "react";
import ShippingTitle from "./title/ShippingTitle";
import ShippingQuestions from "./faqs/ShippingQuestions";
import { shippingData } from "./utils/shippingsfaqs";

const Shipping = () => {
  return (
    <div className="ShippingSectionDiv">
      <ShippingTitle />
      {shippingData.map(({ question, answer }) => (
        <ShippingQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Shipping;
