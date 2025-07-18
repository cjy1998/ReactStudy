import { useReducer } from "react";

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
};

const UseReducerType = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state] = useReducer(reducer, {
    result: 0,
  });
  return <div>UseReducerType</div>;
};

export default UseReducerType;
