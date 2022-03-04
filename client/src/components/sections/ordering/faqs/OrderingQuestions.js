import React, { useState } from "react";
import "../../../styles/styles.css";

const OrderingQuestions = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="personalizedDiv">
      <div className="item">
        <div className="questionDiv" onClick={() => setIsActive(!isActive)}>
          <div className="activeIcon">{isActive ? "-" : "+"}</div>
          <div className="question">{question}</div>
        </div>
      </div>
      <div className="answer" aria-hidden={!isActive}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default OrderingQuestions;
