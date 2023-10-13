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
    <div className=" h-screen flex justify-center items-center">
      <div
        className="shadow-2xl bg-gray-800 bg-opacity-60 rounded-2xl  border-2 border-gray-500"
      >
        <Display expression={expression} />
        <Keyboard onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
