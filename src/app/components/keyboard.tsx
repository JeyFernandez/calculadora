
import React from "react";

interface KeyboardProps {
  onButtonClick: (button: string) => void;
}

const Keyboard = ({ onButtonClick }: KeyboardProps) => {
  return (
    <div className="grid grid-cols-4 gap-0.5">
      <button
        key="C"
        onClick={() => onButtonClick("C")}
        className="p-4  bg-gray-500 text-white col-span-3 text-3xl hover:bg-gray-600 hover:shadow-md transition-transform transform active:scale-95"
      >
        C
      </button>

      <button
        key="/"
        onClick={() => onButtonClick("/")}
        className="p-4  bg-orange-500  text-white text-3xl hover:bg-orange-600 hover:shadow-md transition-transform transform active:scale-95"
      >
        /
      </button>
      <button
        key="7"
        onClick={() => onButtonClick("7")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        7
      </button>
      <button
        key="8"
        onClick={() => onButtonClick("8")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        8
      </button>
      <button
        key="9"
        onClick={() => onButtonClick("9")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        9
      </button>
      <button
        key="*"
        onClick={() => onButtonClick("*")}
        className="p-4 bg-orange-500  text-white text-3xl hover:bg-orange-600 hover:shadow-md transition-transform transform active:scale-95"
      >
        *
      </button>
      <button
        key="4"
        onClick={() => onButtonClick("4")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        4
      </button>
      <button
        key="5"
        onClick={() => onButtonClick("5")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        5
      </button>
      <button
        key="6"
        onClick={() => onButtonClick("6")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        6
      </button>
      <button
        key="-"
        onClick={() => onButtonClick("-")}
        className="p-4  bg-orange-500  text-white text-3xl hover:bg-orange-600 hover:shadow-md transition-transform transform active:scale-95"
      >
        -
      </button>
      <button
        key="1"
        onClick={() => onButtonClick("1")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        1
      </button>
      <button
        key="2"
        onClick={() => onButtonClick("2")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        2
      </button>
      <button
        key="3"
        onClick={() => onButtonClick("3")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        3
      </button>
      <button
        key="+"
        onClick={() => onButtonClick("+")}
        className="p-4  bg-orange-500  text-white text-3xl hover:bg-orange-600 hover:shadow-md transition-transform transform active:scale-95"
      >
        +
      </button>

      <button
        key="0"
        onClick={() => onButtonClick("0")}
        className="p-4  bg-gray-700 text-white text-3xl col-span-2 hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95 rounded-bl-2xl"
      >
        0
      </button>
      <button
        key="."
        onClick={() => onButtonClick(".")}
        className="p-4  bg-gray-700 text-white text-3xl hover:bg-gray-800 hover:shadow-md transition-transform transform active:scale-95"
      >
        .
      </button>

      <button
        key="="
        onClick={() => onButtonClick("=")}
        className="p-4  bg-orange-500  text-white text-3xl hover:bg-orange-600 hover:shadow-md transition-transform transform active:scale-95 rounded-br-2xl"
      >
        =
      </button>
    </div>
  );
};

export default Keyboard;
