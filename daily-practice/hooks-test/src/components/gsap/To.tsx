import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CodeBlock from "../CodeBlock";
import { Radio } from "antd";

gsap.registerPlugin(useGSAP);
const code = `
useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 200,
      duration: 1,
    });
  }, [boxRef]);
  // to 方法
  // 第一个参数：目标元素
  // 第二个参数：动画参数
`;
const To = () => {
  const [value, setvalue] = useState(1);
  const boxRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // 每次先重置元素位置
    gsap.set(boxRef.current, { x: 0, y: 0 });

    switch (value) {
      case 1:
        gsap.to(boxRef.current, {
          x: 200,
          duration: 1,
        });
        break;
      case 2:
        gsap.from(boxRef.current, {
          x: 200,
          rotation: 180,
          duration: 1,
        });
        break;
      case 3:
        gsap.fromTo(
          boxRef.current,
          {
            x: 50,
            y: 50,
          },
          {
            x: 200,
            y: 0,
            duration: 1,
          }
        );
        break;
    }
  }, [value]);
  return (
    <div>
      <Radio.Group
        value={value}
        options={[
          { value: 1, label: "to" },
          { value: 2, label: "from" },
          { value: 3, label: "fromTo" },
        ]}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <div
        ref={boxRef}
        className="bg-green-500 rounded-md w-[200px] h-[200px]"
      ></div>
      <div>
        <CodeBlock language="typescript" code={code} />
      </div>
    </div>
  );
};

export default To;
