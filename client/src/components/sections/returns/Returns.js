import React from "react";
import ReturnsTitle from "./title/ReturnsTitle";
import ReturnsQuestions from "./faqs/ReturnsQuestions";
import { returnsData } from "./utils/returnsfaqs";

const Returns = () => {
  return (
    <div className="returnsSectionDiv">
      <ReturnsTitle />
      {returnsData.map(({ question, answer }) => (
        <ReturnsQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Returns;
