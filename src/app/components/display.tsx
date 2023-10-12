import React from "react";

const Display = ({ expression }) => (
  <div
    className="bg-gray-800 p-10 text-white text-3xl font-bold w-80 rounded-t-2xl"
    style={{ direction: "rtl" }}
  >
    {expression || "0"}
  </div>
);

export default Display;
