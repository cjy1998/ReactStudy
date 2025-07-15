import React, { useReducer } from "react";
import CodeBlock from "../CodeBlock";

interface Data {
  result: number;
}
interface Action {
  type: "add" | "minus";
  num: number;
}

const reducer = (state: Data, action: Action) => {
  switch (action.type) {
    case "add":
      return {
        result: state.result + action.num,
      };
    case "minus":
      return {
        result: state.result - action.num,
      };
  }
  return state;
};
const code = `
// 基本使用
const [state, dispatch] = useReducer(
    (state, action) => {}, 
    initialArg,
    init
);

/**
 * reducer：函数，可以理解为 redux 中的 reducer，最终返回的值就是新的数据源 state；
 * initialArg：初始默认值；
 * init：惰性初始化，可选值。
 * /
`;
const UseReducer = () => {
  //   const [state, dispatch] = useReducer(reducer, { result: 0 });
  return (
    <div className="flex flex-col gap-4">
      <CodeBlock code={code} language="typescript" />
    </div>
  );
};

export default UseReducer;
