import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseEffect from "./hooks/UseEffect";

function App() {
  //初始化数据
  const initData = (num1: number, num2: number) => {
    return num1 + num2;
  };
  /* useState(init()) 只支持同步函数 */
  const [count, setCount] = useState(initData(10, 20));
  return (
    <div>
      <h1>{count}</h1>
      {/* 
        可以直接传新的值，或者传一个函数，返回新的值，这个函数的参数是上一次的 state
      */}
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}

      <button onClick={() => setCount((preNum) => preNum + 1)}>+</button>
      <button onClick={() => setCount((preNum) => preNum - 1)}>-</button>

      <UseEffect />
    </div>
  );
}

export default App;
