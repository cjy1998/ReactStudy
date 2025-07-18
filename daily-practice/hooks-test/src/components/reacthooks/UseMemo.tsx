import React, { useMemo, useState } from "react";
import CodeBlock from "../CodeBlock";

const code = `
    const cacheData = useMemo(fn,deps)
`;

// const usePow = (list: string[]) => {
//   const index = Math.floor(Math.random() * list.length);
//   return list[index];
// };

const UseMemo = () => {
  const [flag, setflag] = useState(0);

  const colors = ["red", "yellow", "blue"];
  const index = Math.floor(Math.random() * colors.length);
  const color = useMemo(() => colors[index], []);
  // const data = () => colors[index];
  const data = (): string => {
    return colors[index];
  };
  return (
    <div className="flex flex-col gap-4">
      <CodeBlock code={code} language="typescript" />
      <h3>Params:</h3>
      <ul>
        <li>fn: 函数，函数的返回值会作为缓存值；</li>
        <li>
          deps：依赖项，数组，会通过数组里的值来判断是否进行 fn
          的调用，如果发生了改变，则会得到新的缓存值。
        </li>
      </ul>
      <h3>Result:</h3>
      <ul>
        <li>
          cacheData：更新之后的数据源，即 fn 函数的返回值，如果 deps
          中的依赖值发生改变，将重新执行 fn，否则取上一次的缓存值。
        </li>
      </ul>
      <h3>例子: 没有缓存，每次数字变化颜色也会变化</h3>
      <div style={{ color: data() }}>颜色：{data()}</div>
      <button
        onClick={() =>
          setflag((val) => {
            if (val === 2) {
              return 0;
            }
            return val + 1;
          })
        }
      >
        切换：{flag}
      </button>
      <h3>例子: 使用 useMemo缓存，每次数字变化颜色不会重置</h3>
      <div style={{ color: color }}>颜色：{color}</div>
    </div>
  );
};

export default UseMemo;
