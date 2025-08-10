import React, { useState } from "react";
import { shapesSettingsList } from "../Options";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ColorPickerEditor from "./ColorPickerEditor";
import useCanvasEditor from "@/hooks/UseCanvasHook";
const ShapesSettings = () => {
  const { canvasEditor } = useCanvasEditor();
  const [showColors, setShowColors] = useState(false);
  const [fillColor, setFillColor] = useState("#fff");
  const handleClick = (value) => {
    if (!canvasEditor) {
      return;
    }
    const activeObject = canvasEditor.getActiveObject();
    if (!activeObject) {
      return;
    }
    switch (value) {
      case "delete":
        canvasEditor.remove(activeObject);
        break;
      case "fill":
        setShowColors((prev) => !prev);
        break;
      default:
        break;
    }
    canvasEditor.renderAll();
  };
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
    <div className="relative">
      <div className="flex gap-4">
        {shapesSettingsList.map((item) => (
          <div
            key={item.value}
            className="hover:scale-105 "
            onClick={() => handleClick(item.value)}
          >
            <Tooltip>
              <TooltipTrigger>
                <Image
                  width={24}
                  height={24}
                  src={item.icon}
                  alt={item.name}
                  className="cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
      {showColors && (
        <div className="absolute top-10 right-0">
          <ColorPickerEditor
            value={fillColor}
            showCircle={false}
            onColorChange={(e) => onColorChange(e)}
          />
        </div>
      )}
    </div>
  );
};

export default ShapesSettings;
