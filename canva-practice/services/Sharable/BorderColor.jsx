import React, { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";
import useCanvasEditor from "@/hooks/UseCanvasHook";
const BorderColor = () => {
  const [borderColor, setBorderColor] = useState("#fff");
  const { canvasEditor } = useCanvasEditor();
  const onColorChange = (e) => {
    const activeObject = canvasEditor.getActiveObject();
    activeObject.set({
      stroke: e,
    });
    canvasEditor.renderAll();
    setBorderColor(e);
    // setShowColors(false);
  };
  return (
    <div>
      {" "}
      <ColorPickerEditor
        value={borderColor}
        showCircle={false}
        onColorChange={(e) => onColorChange(e)}
      />
    </div>
  );
};

export default BorderColor;
