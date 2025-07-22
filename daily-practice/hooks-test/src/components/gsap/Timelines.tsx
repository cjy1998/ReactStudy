import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button, Table } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import CodeBlock from "../CodeBlock";
gsap.registerPlugin(useGSAP);
const tl = gsap.timeline();
const data = [
  {
    name: "绝对时间",
    code: "1.5",
    remark: "在时间线开始后 1.5 秒处开始",
  },
  {
    name: "相对时间线末尾",
    code: '"+=2"',
    remark: "在时间线当前总长度之后 2 秒开始",
  },
  {
    name: "相对上个动画",
    code: '"-=0.5"',
    remark: "从时间线当前总长度回退 0.5 秒开始（产生重叠）",
  },
  {
    name: "相对上个动画",
    code: '"<"',
    remark: "与上一个动画 同时开始",
  },
  {
    name: "相对上个动画",
    code: '">"',
    remark: "在上一个动画 结束时 开始",
  },
  {
    name: "标签",
    code: '"myLabel"',
    remark: '在名为 "myLabel" 的标签处开始',
  },
  {
    name: "标签",
    code: '"myLabel+=1"',
    remark: '在 "myLabel" 标签之后 1 秒开始',
  },
  {
    name: "百分比偏移",
    code: '"<50%"',
    remark: "在上一个动画开始后，经过其自身时长 50% 时开始",
  },
  {
    name: "百分比偏移",
    code: '">25%"',
    remark: "在上一个动画结束后，再经过其自身时长 25% 时开始",
  },
];
const columns = [
  {
    title: "类型",
    dataIndex: "name",
  },
  {
    title: "示例",
    dataIndex: "code",
  },
  {
    title: "含义",
    dataIndex: "remark",
  },
];
const Timelines = () => {
  // 基本操作
  const [a, seta] = useState(false);
  useGSAP(() => {
    if (a) {
      tl.to(".time-red-box", {
        duration: 1,
        x: 100,
      });
      tl.to(".time-green-box", {
        duration: 1,
        x: 100,
      });
      tl.to(".time-blue-box", {
        duration: 1,
        x: 100,
      });
    } else {
      tl.to(".time-red-box", {
        duration: 1,
        x: 0,
      });
      tl.to(".time-green-box", {
        duration: 1,
        x: 0,
      });
      tl.to(".time-blue-box", {
        duration: 1,
        x: 0,
      });
    }
  }, [a]);
  // 延迟操作
  const [b, setb] = useState(false);
  useGSAP(() => {
    if (b) {
      tl.to(".delay-red-box", {
        duration: 1,
        x: 100,
      });
      tl.to(".delay-green-box", {
        duration: 1,
        delay: 1,
        x: 100,
      });
      tl.to(".delay-blue-box", {
        duration: 1,
        x: 100,
      });
    } else {
      tl.to(".delay-red-box", {
        duration: 1,
        x: 0,
      });
      tl.to(".delay-green-box", {
        duration: 1,
        delay: 1,
        x: 0,
      });
      tl.to(".delay-blue-box", {
        duration: 1,
        x: 0,
      });
    }
  }, [b]);
  // 相对时间操作
  const [c, setc] = useState(false);
  useGSAP(() => {
    if (c) {
      tl.to(
        ".relative-red-box",
        {
          x: 100,
          duration: 2,
        },
        1
      );
      tl.to(
        ".relative-green-box",
        {
          x: 100,
          duration: 1,
        },
        ">"
      );
      tl.to(
        ".relative-blue-box",
        {
          duration: 1,
          x: 100,
        },
        "+=1"
      );
    } else {
      tl.to(".relative-red-box", {
        duration: 1,
        x: 0,
      });
      tl.to(".relative-green-box", {
        duration: 1,
        x: 0,
      });
      tl.to(".relative-blue-box", {
        duration: 1,
        x: 0,
      });
    }
  }, [c]);
  return (
    <div>
      <h1 className="text-xl font-bold">时间线</h1>
      <div className="flex justify-around gap-2 flex-wrap">
        <div className="flex flex-col gap-1 w-1/3">
          <span>基本操作</span>
          <Button
            type="primary"
            onClick={() => seta(!a)}
            shape="circle"
            icon={<PlayCircleOutlined />}
          />
          <div className="w-10 h-10 bg-red-300 time-red-box"></div>
          <div className="w-10 h-10 bg-green-300 time-green-box"></div>
          <div className="w-10 h-10 bg-blue-300 time-blue-box"></div>
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <span>添加延迟</span>
          <Button
            type="primary"
            onClick={() => setb(!b)}
            shape="circle"
            icon={<PlayCircleOutlined />}
          />
          <div className="w-10 h-10 bg-red-300 delay-red-box"></div>
          <div className="w-10 h-10 bg-green-300 delay-green-box"></div>
          <div className="w-10 h-10 bg-blue-300 delay-blue-box"></div>
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <span>相对时间（相当于时间轴）</span>
          <Button
            type="primary"
            onClick={() => setc(!c)}
            shape="circle"
            icon={<PlayCircleOutlined />}
          />
          <div className="w-10 h-10 bg-red-300 relative-red-box"></div>
          <div className="w-10 h-10 bg-green-300 relative-green-box"></div>
          <div className="w-10 h-10 bg-blue-300 relative-blue-box"></div>
        </div>
        <Table columns={columns} dataSource={data} />;
        <div className="flex flex-col gap-1 w-1/2">
          <span>时间线添加默认属性</span>
          <p>
            任何添加到时间轴中默认对象的属性，都将被所有使用to()、from()和fromTo()等便捷方法创建的子对象继承。
          </p>
          <CodeBlock
            language="typescript"
            code='var tl = gsap.timeline({defaults: {duration: 1}});
tl.to(".green", {x: 200})
  .to(".purple", {x: 200, scale: 0.2})
  .to(".orange", {x: 200, scale: 2, y: 20});'
          />
        </div>
      </div>
    </div>
  );
};

export default Timelines;
