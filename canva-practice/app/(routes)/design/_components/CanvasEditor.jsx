"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, Rect } from "fabric";
import TopNavBar from "@/services/Components/TopNavBar";
import useCanvasEditor from "@/hooks/UseCanvasHook";
const CanvasEditor = ({ designInfo }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const { canvasEditor, setCanvasEditor } = useCanvasEditor();
  useEffect(() => {
    if (canvasRef.current && designInfo) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: designInfo?.width / 2,
        height: designInfo?.height / 2,
        backgroundColor: "#fff",
        // 保持对象层级不变
        preserveObjectStacking: true,
      });
      //   设置分辨率
      const scaleFactor = window.devicePixelRatio || 1;
      initCanvas.set({
        width: designInfo?.width * scaleFactor,
        height: designInfo?.height * scaleFactor,
        zoom: 1 / scaleFactor,
      });

      initCanvas.renderAll();
      setCanvas(initCanvas);
      setCanvasEditor(initCanvas);
      return () => {
        initCanvas.dispose();
      };
    }
  }, [designInfo]);
  // 删除
  useEffect(() => {
    const handelKeyDown = (e) => {
      if (e.key == "Delete" || e.key == "Backspace") {
        if (canvasEditor) {
          const activeObject = canvasEditor.getActiveObject();
          if (activeObject) {
            canvasEditor.remove(activeObject);
            canvasEditor.renderAll();
          }
        }
      }
    };
    document.addEventListener("keydown", handelKeyDown);
    return () => {
      document.removeEventListener("keydown", handelKeyDown);
    };
  }, [canvasEditor]);
  return (
    <div className=" w-full h-[calc(100vh-64px)] bg-secondary relative">
      <TopNavBar />
      <div className="h-[calc(100vh-64px)] flex items-center justify-center flex-col p-2 ">
        <canvas id="canvas" ref={canvasRef} />
      </div>
    </div>
  );
};

export default CanvasEditor;
