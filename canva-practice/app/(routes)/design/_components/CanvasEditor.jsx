"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, Rect } from "fabric";
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
  return (
    <div className=" w-full h-[calc(100vh-64px)] flex items-center justify-center flex-col p-2 bg-secondary">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};

export default CanvasEditor;
