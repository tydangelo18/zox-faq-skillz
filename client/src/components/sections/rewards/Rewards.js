import React from "react";
import RewardsTitle from "./title/RewardsTitle";
import RewardsQuestions from "./faqs/RewardsQuestions";
import { rewardsData } from "./utils/rewardsfaqs";

const Rewards = () => {
  return (
    <div className="rewardsSectionDiv">
      <RewardsTitle />
      {rewardsData.map(({ question, answer }) => (
        <RewardsQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Rewards;
