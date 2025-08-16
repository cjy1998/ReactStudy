import React, { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";
import useCanvasEditor from "@/hooks/UseCanvasHook";

const FillColor = () => {
  const [fillColor, setFillColor] = useState("#fff");
  const { canvasEditor } = useCanvasEditor();
  const onColorChange = (e) => {
    const activeObject = canvasEditor.getActiveObject();
    activeObject.set({
      fill: e,
    });
    canvasEditor.renderAll();
    setFillColor(e);
    // setShowColors(false);
  };
  return (
    <div>
      <ColorPickerEditor
        value={fillColor}
        showCircle={false}
        onColorChange={(e) => onColorChange(e)}
      />
    </div>
  );
};

export default FillColor;
