import React from "react";
import CodeBlock from "../CodeBlock";

interface ChildProps {
  title: string;
}

const Child: React.FC<ChildProps> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};
const code = `
interface ChildProps {
  title: string;
}

const Child: React.FC<ChildProps> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};
`;
const FcType: React.FC = () => {
  return (
    <div>
      <h1>函数组件的类型</h1>
      <Child title="我是子组件" />
      <CodeBlock language="typescript" code={code} />
    </div>
  );
};

export default FcType;
