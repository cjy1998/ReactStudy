import React from "react";
import { Slider } from "@/components/ui/slider";
import useCanvasEditor from "@/hooks/UseCanvasHook";

const SliderWithOrRadius = ({ defaultValue, max, step, type }) => {
  const { canvasEditor } = useCanvasEditor();
  const changeValue = (value) => {
    console.log(value);
    const activeObject = canvasEditor.getActiveObject();
    if (!activeObject) return;
    switch (type) {
      case "strokeWidth":
        activeObject.set({
          strokeWidth: value[0],
        });
        break;
      case "radius":
        activeObject.set({
          rx: value[0],
          ry: value[0],
        });
        break;
      case "opacity":
        activeObject.set({
          opacity: value[0],
        });
        break;
      default:
        break;
    }
    canvasEditor.renderAll();
  };
  return (
    <div>
      <h2 className="my-1">
        {type === "strokeWidth"
          ? "边框宽度"
          : type === "radius"
            ? "圆角"
            : "透明度"}
      </h2>
      <Slider
        onValueChange={changeValue}
        defaultValue={defaultValue}
        max={max}
        step={step}
      />
    </div>
  );
};

export default SliderWithOrRadius;
