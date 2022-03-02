import React from "react";
import SubscriptionsTitle from "./title/SubscriptionsTitle";
import SubQuestions from "./faqs/SubQuestions";
import { subscriptionsData } from "./utils/subscriptionsfaqs";

const Subscriptions = () => {
  return (
    <div className="subscriptionsSectionDiv">
      <SubscriptionsTitle />
      {subscriptionsData.map(({ question, answer }) => (
        <SubQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Subscriptions;
