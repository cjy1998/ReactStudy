import { useGSAP } from "@gsap/react";
import { Checkbox, type CheckboxOptionType } from "antd";
import { useRef, useState } from "react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);

const options: CheckboxOptionType<string>[] = [
  { label: "x", value: "x: 100" },
  { label: "y", value: "y: 100" },
  { label: "rotate", value: "rotate: 90" },
];
const Attribute = () => {
  const boxRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  useGSAP(() => {
    console.log({
      ...selectedOptions.reduce(
        (prev, cur) => ({
          ...prev,
          [cur]: 0,
        }),
        {}
      ),
    });
    if (boxRef.current) {
      //   gsap.set(boxRef.current, {
      //     ...selectedOptions.reduce(
      //       (prev, cur) => ({
      //         ...prev,
      //         [cur]: 0,
      //       }),
      //       {}
      //     ),
      //   });
      // gsap.to(boxRef.current, {
      //   ...selectedOptions.map(item => item)
      // })
    }
  }, [selectedOptions]);
  const onChange = (checkedValues: string[]) => {
    setSelectedOptions(checkedValues);
  };

  return (
    <div>
      <span>属性练习</span>
      <Checkbox.Group
        options={options}
        defaultValue={["x"]}
        onChange={onChange}
      />
      <div ref={boxRef} className="w-10 h-10 rounded-md bg-orange-500"></div>
    </div>
  );
};

export default Attribute;
