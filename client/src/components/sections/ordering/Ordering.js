import React from "react";
import OrderingTitle from "./title/OrderingTitle";
import OrderingQuestions from "./faqs/OrderingQuestions";
import { orderingData } from "./utils/faqs";

const Ordering = () => {
  return (
    <div className="OrderingSectionDiv">
      <OrderingTitle />
      {orderingData.map(({ question, answer }) => (
        <OrderingQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Ordering;
