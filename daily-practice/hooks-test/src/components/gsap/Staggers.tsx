import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
gsap.registerPlugin(useGSAP);
const Staggers = () => {
  const [a, seta] = useState(false);
  useGSAP(() => {
    if (a) {
      gsap.to(".box", {
        duration: 1,
        rotation: 360,
        opacity: 1,
        delay: 0.5,
        stagger: -0.2,
        ease: "sine.out",
        force3D: true,
      });
    } else {
      gsap.set(".box", {
        rotation: 0,
        opacity: 0,
        delay: 0.5,
      });
    }
  }, [a]);
  return (
    <div>
      <h1 className="text-xl font-bold">交错动画</h1>
      <Button
        type="primary"
        onClick={() => seta(!a)}
        shape="circle"
        icon={<PlayCircleOutlined />}
      />
      <div className="flex justify-around">
        <div className="box bg-amber-300 w-10 h-10 rounded-md"></div>
        <div className="box bg-red-300 w-10 h-10 rounded-md"></div>
        <div className="box bg-green-300 w-10 h-10 rounded-md"></div>
        <div className="box bg-blue-300 w-10 h-10 rounded-md"></div>
        <div className="box bg-purple-300 w-10 h-10 rounded-md"></div>
        <div className="box bg-yellow-300 w-10 h-10 rounded-md"></div>
      </div>
      <p>
        stagger: 0.1每个补间动画的开始时间之间间隔 0.1
        秒。负值则效果相同，但顺序相反，即最后一个元素最先开始。
      </p>
    </div>
  );
};

export default Staggers;
