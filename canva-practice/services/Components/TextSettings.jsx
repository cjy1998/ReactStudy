import React from "react";
import useCanvasEditor from "@/hooks/UseCanvasHook";
import { IText } from "fabric";

const TextSettings = () => {
  const { canvasEditor } = useCanvasEditor();
  const handleAddText = (type) => {
    /**
     * 0: 标题
     * 1: 子标题
     * 2: 段落
     */
    let textRef = null;
    const commonTextProps = {
      fontSize: 10,
      fontWeight: "normal",
      fontFamily: "Arial",
      fill: "black",
      left: 100,
      top: 100,
    };
    switch (type) {
      case 0:
        textRef = new IText("标题", {
          ...commonTextProps,
          fontSize: 32,
          fontWeight: "bold",
        });
        break;

      case 1:
        textRef = new IText("子标题", {
          ...commonTextProps,
          fontSize: 24,
          fontWeight: 400,
        });
        break;
      case 2:
        textRef = new IText("段落", {
          ...commonTextProps,
          fontSize: 16,
        });
        break;
    }
    canvasEditor.add(textRef);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2
        onClick={() => handleAddText(0)}
        className="cursor-pointer font-bold text-3xl p-3 bg-secondary rounded-xl"
      >
        添加标题
      </h2>
      <h2
        onClick={() => handleAddText(1)}
        className="cursor-pointer font-medium text-xl p-3 bg-secondary rounded-xl"
      >
        添加子标题
      </h2>
      <h2
        onClick={() => handleAddText(2)}
        className="cursor-pointer text-md p-3 bg-secondary rounded-xl"
      >
        添加段落
      </h2>
    </div>
  );
};

export default TextSettings;
