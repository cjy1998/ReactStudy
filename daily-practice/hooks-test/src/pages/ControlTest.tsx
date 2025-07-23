import { Button } from "antd";
import React, { useRef, useState } from "react";

const ControlTest = () => {
  //   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(e.target.value);
  //   };
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setvalue] = useState("hello");
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setvalue(e.target.value);
  };
  return (
    <div className="p-5">
      <em>
        <b>由用户控制就是非受控模式，由代码控制就是受控模式</b>
      </em>
      <div>
        <b>非受控 </b>
        <input
          type="text"
          defaultValue="hello"
          ref={inputRef}
          className="border border-black rounded-md"
        />
        <Button
          onClick={() => {
            alert(inputRef.current?.value);
          }}
        >
          提交
        </Button>
      </div>
      <div>
        <b>受控模式</b>
        <input
          value={value}
          onChange={inputChange}
          className="border border-black rounded-md"
        />
      </div>
    </div>
  );
};

export default ControlTest;
