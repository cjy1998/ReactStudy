import React, { type JSX } from "react";
import CodeBlock from "../CodeBlock";

interface ChildProps {
  title: string;

  context: React.ReactElement;
}
const context: JSX.Element = (
  <div className="bg-amber-200 font-bold w-[80px]">context</div>
);
const Chrild = (props: ChildProps) => {
  return (
    <div>
      <div>{props.title}</div>
      {props.context}
    </div>
  );
};
const code = `
interface ChildProps {
  title: string;
   /**
   * 如果有的时候就是 number、null ,换成 ReactNode
   * ReactNode 包含 ReactElement、或者 number、string、null、boolean 等可以写在 JSX 里的类型。
   * 这三个类型的关系 ReactNode > ReactElement > JSX.Element。
   */
  context: React.ReactElement;
}
const context: JSX.Element = (
  <div className="bg-amber-200 font-bold w-[80px]">context</div>
);
const Chrild = (props: ChildProps) => {
  return (
    <div>
      <div>{props.title}</div>
      {props.context}
    </div>
  );
};
`;
const JsxType = () => {
  return (
    <div className="w-sm">
      <h1>Jsx的类型</h1>
      <Chrild title="JsxType" context={context} />
      <CodeBlock language="typescript" code={code} />
    </div>
  );
};

export default JsxType;
