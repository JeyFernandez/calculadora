import React from "react";

const Keyboard = ({ onButtonClick }) => {
  const buttons = [
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="grid grid-cols-4 gap-0.5">
      <button
        key="C"
        onClick={() => onButtonClick("C")}
        className="p-4  bg-gray-500 text-white col-span-3 text-3xl hover:bg-gray-600 hover:shadow-md transition-transform transform active:scale-95"
      >
        C
      </button>
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onButtonClick(button)}
          className={`p-4 ${
            "+-*/=".includes(button) ? "bg-orange-500" : "bg-gray-400"
          } text-3xl hover:bg-gray-300 hover:shadow-md transition-transform transform active:scale-95 ${
            button === "0" ? "col-span-2  rounded-bl-2xl" : ""
            }
            ${button === "=" ? "rounded-br-2xl" : ""
            }
          `}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
