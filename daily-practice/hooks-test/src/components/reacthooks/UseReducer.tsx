import { useReducer } from "react";
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
    default:
      return state;
  }
};
const code = `
// 基本使用
const [state, dispatch] = useReducer(
    (state, action) => {}, 
    initialArg,
    init
);

/**
 * Params：
 * reducer：函数，可以理解为 redux 中的 reducer，最终返回的值就是新的数据源 state；
 * initialArg：初始默认值；
 * init：惰性初始化，可选值。
 * 
 * Result：
 * state：更新之后的数据源；
 * dispatch：用于派发更新的dispatchAction，可以认为是useState中的setState。
 * /
`;
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { result: 0 });
  return (
    <div className="flex flex-col gap-4">
      <div>当前结果：{state.result}</div>
      <button onClick={() => dispatch({ type: "add", num: 3 })}>累加3</button>
      <button onClick={() => dispatch({ type: "minus", num: 2 })}>累减2</button>
      <CodeBlock code={code} language="typescript" />
      特别注意： 在 reducer 中，如果返回的 state 和之前的 state
      值相同，那么组件将不会更新。
    </div>
  );
};

export default UseReducer;
