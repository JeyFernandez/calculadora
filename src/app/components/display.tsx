import React from "react";

interface DisplayProps {
  expression: string;
}

const Display = ({ expression }: DisplayProps) => (
  <div className="bg-gray-800 bg-opacity-60 p-10 text-white text-3xl font-bold w-80 rounded-t-2xl text-right">
    {expression || "0"}
  </div>
);

export default Display;
