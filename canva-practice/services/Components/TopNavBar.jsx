import React, { useEffect, useState } from "react";
import ShapesSettings from "../Sharable/ShapesSettings";
import TextSettings from "../Sharable/TextSettings";
import useStore from "@/lib/store";
import useCanvasEditor from "@/hooks/UseCanvasHook";

const TopNavBar = () => {
  const menu = useStore((state) => state.sideBarMenu);
  const { canvasEditor } = useCanvasEditor();
  const [showShapesSettings, setShowShapesSettings] = useState(false);
  const [showTextSettings, setShowTextSettings] = useState(false);
  useEffect(() => {
    console.log(canvasEditor);

    if (canvasEditor) {
      const activeObject = canvasEditor.getActiveObject();
      // console.log(activeObject, canvasEditor);
    }
  }, [canvasEditor]);
  if (canvasEditor) {
    canvasEditor.on("selection:created", (e) => {
      console.log("selection:created", e);
      const activeObject = canvasEditor.getActiveObject();
      // if (e.selected[0]?.cornerStyle == "rect") {
      //   setShowShapesSettings(true);
      // }
      if (activeObject?.type == "i-text") {
        setShowTextSettings(true);
        setShowShapesSettings(false);
      } else {
        setShowShapesSettings(true);
        setShowTextSettings(false);
      }
    });
    canvasEditor.on("selection:updated", (e) => {
      const activeObject = canvasEditor.getActiveObject();
      if (activeObject?.type == "i-text") {
        setShowTextSettings(true);
        setShowShapesSettings(false);
      } else {
        setShowShapesSettings(true);
        setShowTextSettings(false);
      }
    });
    canvasEditor.on("selection:cleared", () => {
      setShowShapesSettings(false);
      setShowTextSettings(false);
    });
  }
  return (
    <div>
      {showShapesSettings || showTextSettings ? (
        <div
          className=" bg-white p-2 rounded-md shadow-md 
    absolute top-[10px] left-[50%] translate-x-[-50%] z-10"
        >
          {showShapesSettings && <ShapesSettings />}
          {showTextSettings && <TextSettings />}
        </div>
      ) : null}
    </div>
  );
};

export default TopNavBar;
