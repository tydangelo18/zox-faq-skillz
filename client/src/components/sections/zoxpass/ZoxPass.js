import React from "react";
import ZoxPassTitle from "./title/ZoxPassTitle";
import ZoxPassQuestions from "./faqs/ZoxPassQuestions";
import { zoxPassData } from "./utils/zoxpassfaqs";

const ZoxPass = () => {
  return (
    <div className="zoxPassSectionDiv">
      <ZoxPassTitle />
      {zoxPassData.map(({ question, answer }) => (
        <ZoxPassQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default ZoxPass;
