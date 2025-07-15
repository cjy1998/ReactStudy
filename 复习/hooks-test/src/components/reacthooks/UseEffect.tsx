import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setnum] = useState(0);
  const queryData = async () => {
    const result = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(100);
      }, 2000);
    });
    return result;
  };
  useEffect(() => {
    queryData().then((res) => {
      setnum(res);
    });
  }, []);
  return (
    <div className="flex flex-col">
      {num}
      <span>useEffect 第一个参数不支持 async</span>
      <span>
        useEffect 第二个参数是依赖数组，根据它有没有变来决定是否执行 effect
        函数，如果没传则每次都执行。
      </span>
    </div>
  );
};

export default UseEffect;
