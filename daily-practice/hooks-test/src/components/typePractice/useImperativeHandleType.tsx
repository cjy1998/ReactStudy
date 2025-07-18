import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CodeBlock from "../CodeBlock";

interface ChildProps {
  name: string;
}
interface ChildRef {
  aaa: () => void;
  value?: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Child: React.ForwardRefRenderFunction<ChildRef, ChildProps> = (
  props,
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setvalue] = useState<string>("");
  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus();
        },
        value: value,
      };
    },
    [value]
  );
  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      ></input>
      <span>{props.name}</span>
    </div>
  );
};
const code = `const Child: React.ForwardRefRenderFunction<ChildRef, ChildProps> = ( props,ref)`;
// eslint-disable-next-line react-refresh/only-export-components
const ChildRef = forwardRef(Child);
const useImperativeHandleType = () => {
  const ref = useRef<ChildRef>(null);
  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []);
  return (
    <div className="w-sm">
      useImperativeHandleType
      <p>
        forwardRef 包裹的组件会额外传入 ref 参数，所以它不是 FunctionComponent
        类型，而是专门的 ForwardRefRenderFunction
        类型。它有两个类型参数，第一个是 ref 内容的类型，第二个是 props 的类型：
      </p>
      <CodeBlock language="typescript" code={code} />
      <ChildRef name="cjy" ref={ref} />
    </div>
  );
};

export default useImperativeHandleType;
