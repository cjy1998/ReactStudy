import { useImperativeHandle, useRef, useState, type Ref } from "react";
import CodeBlock from "../CodeBlock";

const code = `useImperativeHandle(ref, createHandle, deps)`;

const Child = ({ cRef }: { cRef: Ref<unknown> }) => {
  const [count, setcount] = useState(0);

  useImperativeHandle(cRef, () => ({
    add,
  }));
  const add = () => {
    console.log("sss");

    setcount((val) => val + 1);
  };
  return (
    <div>
      <h3>子组件,点击次数{count}</h3>
      <button onClick={add}>子组件点击</button>
    </div>
  );
};

const ImperativeHandle = () => {
  const ref = useRef<{ add: () => void }>(null);
  return (
    <div className="flex flex-col gap-4">
      <p>
        useImperativeHandle：可以通过 ref 或 forwardRef
        暴露给父组件的实例值，所谓的实例值是指值和函数。
      </p>
      <h3>基本用法</h3>
      <CodeBlock language="typescript" code={code} />
      <h3>Params</h3>
      <ul>
        <li>ref：接受 useRef 或 forwardRef 传递过来的 ref；</li>
        <li>createHandle：处理函数，返回值作为暴露给父组件的 ref 对象；</li>
        <li>deps：依赖项，依赖项如果更改，会形成新的 ref 对象。</li>
      </ul>
      <div>
        <button onClick={() => ref.current?.add()}>父组件点击</button>
        <Child cRef={ref} />
      </div>
    </div>
  );
};

export default ImperativeHandle;
