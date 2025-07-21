import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import CodeBlock from "../CodeBlock";
import { Button } from "antd";
gsap.registerPlugin(useGSAP);

const code = `
  const ref = useRef<(HTMLDivElement | null)[]>([]);
   useGSAP(() => {
    gsap.to(ref.current, {
      x: 200,
      rotate: 360,
      duration: 2,
    });
  });
`;
const MultipleTarget = () => {
  const ref = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    ref.current[index] = el;
  };
  const [value, setvalue] = useState(false);
  useGSAP(() => {
    // ref.current.forEach((el) => {
    //   if (el) {
    //     gsap.to(el, {
    //       x: 200,
    //       rotate: 360,
    //       duration: 2,
    //     });
    //   }
    // });
    gsap.set(ref.current, {
      x: 0,
      rotate: 0,
    });
    gsap.to(ref.current, {
      x: 200,
      rotate: 270,
      //   backgroundColor: "#800080",
      duration: 2,
      //   repeat: 2,
      //   repeatDelay: 1,
      //   yoyo: true,
      ease: "bounce.out",
    });
  }, [value]);
  return (
    <div>
      <span>多个元素</span>
      <Button onClick={() => setvalue((val) => !val)}>开始动画</Button>
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-red-500 rounded-md" ref={setRef(0)}></div>
        <div
          className="w-10 h-10 bg-green-500 rounded-md"
          ref={setRef(1)}
        ></div>
        <div
          className="w-10 h-10 bg-yellow-500 rounded-md"
          ref={setRef(2)}
        ></div>
        <div className="w-10 h-10 bg-gray-500 rounded-md" ref={setRef(3)}></div>
        <div className="w-10 h-10 bg-blue-500 rounded-md" ref={setRef(4)}></div>
        <div className="w-10 h-10 bg-black rounded-md" ref={setRef(5)}></div>
      </div>
      <CodeBlock language="typescript" code={code} />
    </div>
  );
};

export default MultipleTarget;
