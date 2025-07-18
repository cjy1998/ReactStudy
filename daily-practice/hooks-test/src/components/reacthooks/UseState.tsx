import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-full flex flex-col">
      <span>count:{count}</span>
      <div className="flex gap-4 mt-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default UseState;
