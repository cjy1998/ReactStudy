import React, { useEffect, useState } from "react";

const queryData = async () => {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 2000);
  });
  return data;
};
const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    queryData().then((res) => {
      setCount(res);
    });
  }, []);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default UseEffect;
