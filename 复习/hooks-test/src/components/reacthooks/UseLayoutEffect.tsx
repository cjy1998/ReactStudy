import React from "react";

const UseLayoutEffect = () => {
  return (
    <div>
      <p>useEffect和useLayoutEffect的区别</p>
      <ul>
        <ol>
          1.useLayoutEffect会在浏览器完成DOM变更后立即同步调用，而useEffect在浏览器完成DOM变更后会异步调用
        </ol>
        <ol>2.useLayoutEffect可以直接读取、修改DOM布局，而useEffect不能</ol>
        <ol>3.useLayoutEffect会阻塞浏览器的渲染，而useEffect不会</ol>
      </ul>
    </div>
  );
};

export default UseLayoutEffect;
