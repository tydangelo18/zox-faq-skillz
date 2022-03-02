import React, { useState } from "react";
import "../../../styles/styles.css";

const RewardsQuestions = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="personalizedDiv">
      <div className="item">
        <div
          className="questionDiv"
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="activeIcon">{isActive ? "-" : "+"}</div>
          <div className="question">{question}</div>
        </div>
      </div>
      {isActive && (
        <div className={isActive ? "answershow" : "answer"}>{answer}</div>
      )}
    </div>
  );
};

export default RewardsQuestions;
