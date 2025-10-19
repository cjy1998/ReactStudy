import React from "react";
import { FontFamilyList } from "../Options";
import useCanvasEditor from "@/hooks/UseCanvasHook";

const FontFamily = () => {
  const { canvasEditor } = useCanvasEditor();
  const onFontFamilyChange = (val) => {
    console.log(val);
    const activeObject = canvasEditor.getActiveObject();
    if (activeObject) {
      activeObject.set({ fontFamily: val });
    }
    canvasEditor.renderAll();
  };
  return (
    <div className="height-[200px] overflow-y-auto">
      {FontFamilyList.map((item) => (
        <h2
          className="text-lg  cursor-pointer bg-secondary rounded-md p-2 mb-1 hover:border-amber-500 border-1"
          key={item.value}
          style={{
            fontFamily: `${item.value}, sans-serif`,
          }}
          onClick={() => onFontFamilyChange(item.value)}
        >
          {item.name}
        </h2>
      ))}
    </div>
  );
};

export default FontFamily;
