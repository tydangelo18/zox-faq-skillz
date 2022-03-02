import React from "react";
import AccountTitle from "./title/AccountTitle";
import AccountQuestions from "./faqs/AccountQuestions";
import { accountData } from "./utils/accountfaqs";

const Account = () => {
  return (
    <div className="accountSectionDiv">
      <AccountTitle />
      {accountData.map(({ question, answer }) => (
        <AccountQuestions question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Account;
