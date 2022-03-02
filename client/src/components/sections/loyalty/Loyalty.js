import React from "react";
import LoyaltyTitle from "./title/LoyaltyTitle";
import LoyaltyQuestions from "./faqs/LoyaltyQuestions";
import { loyaltyData } from "./utils/loyaltyfaqs";

const Loyalty = () => {
  return (
    <div className="loyaltySectionDiv">
      <LoyaltyTitle />
      {loyaltyData.map(({ question, answer }) => (
        <LoyaltyQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Loyalty;
