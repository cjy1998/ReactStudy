import { useRef, useState } from "react";
import CodeBlock from "../CodeBlock";

const HooksType = () => {
  const [first] = useState<boolean>(true);
  const boxRef = useRef<HTMLDivElement>(null);
  const ref = useRef<{ num: number }>({ num: 0 });
  ref.current = { num: 1 };
  return (
    <div>
      <div ref={boxRef}>{first ? `HooksType` : `NotHooksType`}</div>
      <h1>useState</h1>
      <CodeBlock
        language="typescript"
        code={`
const [first, setfirst] = useState<boolean>(true);
`}
      />
      <h1>useRef</h1>
      useRef可以保存 dom 引用或者其他内容,所以有两种类型。
      <ul>
        <li>1.保存dom</li>
        <CodeBlock
          language="typescript"
          code={` //保存 dom 引用的时候，参数需要传个 null
const boxRef = useRef<HTMLDivElement>(null);  
`}
        />
        <li>2.保存其他内容</li>
        <CodeBlock
          language="typescript"
          code={`
const ref = useRef<{num:number}>({num:0})
ref.current = {num:1}
`}
        />
      </ul>
    </div>
  );
};

export default HooksType;
