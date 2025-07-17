import React, { createContext, useContext, useState } from "react";
import CodeBlock from "../CodeBlock";

const UseContext = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        useContext：上下文，类似于Context，其本意就是设置全局共享数据，使所有组件可跨层级实现共享
      </p>
      <p>
        useContext 的参数一般是由 createContext 创建，或者是父级上下文
        context传递的，通过 CountContext.Provider 包裹的组件，才能通过
        useContext 获取对应的值。我们可以简单理解为 useContext 代替
        context.Consumer 来获取 Provider 中保存的 value 值。
      </p>
      <h3>基本用法</h3>
      <CodeBlock
        language="typescript"
        code="const contextValue = useContext(context)"
      />
      <h3>Params:</h3>
      <span>context：一般而言保存的是 context 对象。</span>
      <h3>Result</h3>
      <span>contextValue：返回的数据，也就是context对象内保存的value值。</span>

      <Parent />
    </div>
  );
};

const InfoContext = createContext({
  name: "张三",
  age: "18",
});

const Child = () => {
  const info = useContext(InfoContext);
  return (
    <div>
      <h3>子组件</h3>
      <span>name：{info.name}</span>
      <span>age：{info.age}</span>
      <Son />
    </div>
  );
};

const Son = () => {
  const info = useContext(InfoContext);
  return (
    <div>
      <h3>孙组件</h3>
      <span>name：{info.name}</span>
      <span>age：{info.age}</span>
    </div>
  );
};

const Parent = () => {
  const [Info, setInfo] = useState({
    name: "张三",
    age: "18",
  });
  return (
    <div>
      <input
        value={Info.name}
        onChange={(e) => {
          setInfo({
            ...Info,
            name: e.target.value,
          });
        }}
      />
      <input
        value={Info.age}
        onChange={(e) => {
          setInfo({
            ...Info,
            age: e.target.value,
          });
        }}
      />
      <InfoContext.Provider value={Info}>
        <Child />
      </InfoContext.Provider>
    </div>
  );
};
export default UseContext;
