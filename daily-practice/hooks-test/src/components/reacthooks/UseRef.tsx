import { useEffect, useRef, useState } from "react";
import CodeBlock from "../CodeBlock";

const code = `
const ref = useRef(initialValue);
`;

const UseRef = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [clientHeight, setclientHeight] = useState<number>(0);
  const [scrollTop, setscrollTop] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const onScroll = () => {
    if (boxRef?.current) {
      setscrollTop(boxRef.current.scrollTop);
    }
  };
  useEffect(() => {
    if (boxRef?.current) {
      setclientHeight(boxRef.current.clientHeight);
      setScrollHeight(boxRef.current.scrollHeight);
    }
  }, []);
  return (
    <div>
      <p>可视区域高度:{clientHeight}</p>
      <p>滚动内容高度:{scrollHeight}</p>
      <p>滚动条滚动高度:{scrollTop}</p>
      <div className="h-[100px] overflow-auto" ref={boxRef} onScroll={onScroll}>
        <div className="h-[150px]"></div>
      </div>
      <h3>基本使用</h3>
      <p>用于获取当前元素的所有属性，除此之外，还有一个高级用法：缓存数据。</p>
      <CodeBlock language="typescript" code={code} />
      <h3>Params</h3>
      <ul>
        <li>initialValue：初始值，默认值。</li>
      </ul>
      <h3>Result</h3>
      <ul>
        <li>
          ref：返回的一个 current 对象，这个 current 属性就是 ref
          对象需要获取的内容。
        </li>
      </ul>
    </div>
  );
};

export default UseRef;
