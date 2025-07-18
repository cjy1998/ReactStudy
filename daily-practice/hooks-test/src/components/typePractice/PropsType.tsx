import React from "react";
import CodeBlock from "../CodeBlock";

const code = `type CccProps = PropsWithChildren<{content: ReactNode}>`;
const PropsType = () => {
  return (
    <div>
      PropsType
      <h3>PropsWithChildren</h3>
      <CodeBlock language="typescript" code={code} />
      <h3>CSSProperties</h3>
    </div>
  );
};

export default PropsType;
