import React, { memo, useCallback, useState } from "react";
import CodeBlock from "../CodeBlock";

const code = `const resfn = useCallback(fn, deps)`;
const UseCallback = () => {
  const [count, setcount] = useState(0);
  const [flag, setflag] = useState(true);
  const add = useCallback(() => {
    setcount((val) => val + 1);
  }, [count]);
  return (
    <div className="flex flex-col gap-4">
      <TestButton onClick={() => setcount((val) => val + 1)}>
        普通点击
      </TestButton>
      <TestButton onClick={add}>useCallback点击</TestButton>
      <div>数字:{count}</div>
      <button onClick={() => setflag((v) => !v)}>
        切换 {JSON.stringify(flag)}
      </button>
      <span>
        切换 flag 的时候，没有经过 useCallback
        的函数会再次执行，而包裹的函数并没有执行（点击“普通点击”按钮的时候，useCallbak
        的依赖项 count 发生了改变，所以会打印出 useCallback 点击）。
      </span>
      <h3>基本使用</h3>
      <CodeBlock language="typescript" code={code} />
      <h3>Params</h3>
      <ul>
        <li>fn: 函数，函数的返回值会作为缓存值；</li>
        <li>
          deps：依赖项，数组，会通过数组里的值来判断是否进行 fn
          的调用，如果发生了改变，则会得到新的缓存值。
        </li>
      </ul>
      <h3>Result</h3>
      <ul>
        <li>
          resfn：更新之后的数据源，即 fn 函数，如果 deps
          中的依赖值发生改变，将重新执行 fn，否则取上一次的函数。
        </li>
      </ul>
    </div>
  );
};

const TestButton = memo(
  ({
    children,
    onClick = () => {},
  }: {
    children: string;
    onClick: () => void;
  }) => {
    console.log(children);
    return <button onClick={onClick}>{children}</button>;
  }
);

export default UseCallback;
