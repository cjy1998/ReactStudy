"use client";
import React, { useState } from "react";
import ColorPickerEditor from "../Sharable/ColorPickerEditor";
import useCanvasEditor from "@/hooks/UseCanvasHook";
const BackrgoundSetting = () => {
  const [bgColor, setBgColor] = useState("#fff");
  const { canvasEditor } = useCanvasEditor();
  // 背景颜色改变
  const onColorChange = (e) => {
    setBgColor(e);
    canvasEditor.set({
      backgroundColor: e,
    });
    canvasEditor.renderAll();
  };
  return (
    <div>
      <ColorPickerEditor
        value={bgColor}
        onColorChange={(e) => onColorChange(e)}
      />
    </div>
  );
};

export default BackrgoundSetting;
