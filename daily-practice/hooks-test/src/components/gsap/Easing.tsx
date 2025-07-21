import { useGSAP } from "@gsap/react";
import {
  Button,
  Radio,
  type CheckboxOptionType,
  type RadioChangeEvent,
} from "antd";
import { gsap } from "gsap";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

const options: CheckboxOptionType<string>[] = [
  { label: "power1.out", value: "power1.out" },
  { label: "power1.in", value: "power1.in" },
  { label: "power1.inOut", value: "power1.inOut" },
  { label: "power2.out", value: "power2.out" },
  { label: "power2.in", value: "power2.in" },
  { label: "power2.inOut", value: "power2.inOut" },
  { label: "power3.out", value: "power3.out" },
  { label: "power3.in", value: "power3.in" },
  { label: "power3.inOut", value: "power3.inOut" },
  { label: "back.out", value: "back.out" },
  { label: "back.in", value: "back.in" },
  { label: "back.inOut", value: "back.inOut" },
  { label: "bounce.out", value: "bounce.out" },
  { label: "bounce.in", value: "bounce.in" },
  { label: "bounce.inOut", value: "bounce.inOut" },
  { label: "circ.out", value: "circ.out" },
  { label: "circ.in", value: "circ.in" },
  { label: "circ.inOut", value: "circ.inOut" },
  { label: "elastic.out", value: "elastic.out" },
  { label: "elastic.in", value: "elastic.in" },
  { label: "elastic.inOut", value: "elastic.inOut" },

  { label: "expo.out", value: "expo.out" },
  { label: "expo.in", value: "expo.in" },
  { label: "expo.inOut", value: "expo.inOut" },

  { label: "sine.out", value: "sine.out" },
  { label: "sine.in", value: "sine.in" },
  { label: "sine.inOut", value: "sine.inOut" },

  { label: "steps.out", value: "steps.out" },
  { label: "steps.in", value: "steps.in" },
  { label: "steps.inOut", value: "steps.inOut" },
];

const Easing = () => {
  const [a, seta] = useState(false);
  useGSAP(() => {
    if (a) {
      gsap.to(".green", {
        x: 100,
        rotate: 180,
        duration: 2,
      });
      gsap.to(".orange", {
        x: 100,
        rotate: 180,
        duration: 2,
        ease: "bounce.out",
      });
    }
  }, [a]);
  const [value, setvalue] = useState("none");
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio1 checked", value);
    setvalue(value);
  };
  useGSAP(() => {
    gsap.set(".blue", {
      x: 0,
      rotate: 0,
    });
    gsap.set(".orange_full", {
      x: 0,
      rotate: 0,
    });
    gsap.to(".blue", {
      x: 200,
      rotate: 180,
      duration: 2,
      ease: value,
    });
    gsap.to(".orange_full", {
      x: 200,
      rotate: 180,
      duration: 2,
      ease: value,
    });
  }, [value]);
  return (
    <div>
      <span className="font-bold text-xl">过渡效果</span>
      <div className="flex flex-wrap gap-2">
        <div>
          <div className="flex gap-1">
            <h1>有无过渡效果对比</h1>
            <Button onClick={() => seta(true)}>开始</Button>
          </div>
          <div className="bg-green-400 rounded-md w-10 h-10 green"></div>
          <div className="bg-orange-400 rounded-md w-10 h-10 mt-2 orange"></div>
        </div>

        <div>
          <div className="flex gap-1">
            <h1>各种过渡效果对比</h1>
            <Radio.Group options={options} onChange={onChange} value={value} />
          </div>
          <div className="bg-blue-400 rounded-md w-10 h-10 blue"></div>
          <div className="bg-orange-400 rounded-full w-10 h-10 mt-2 orange_full"></div>
        </div>
      </div>
    </div>
  );
};

export default Easing;
