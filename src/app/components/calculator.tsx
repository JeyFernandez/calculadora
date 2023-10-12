'use client'
import React, { useState } from "react";
import Display from "./display";
import Keyboard from "./keyboard";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (button: any) => {
    if (button === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression("Error");
      }
    } else if (button === "C") {
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + button);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-80 h-96 mt-20">
        <Display expression={expression} />
        <Keyboard onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
