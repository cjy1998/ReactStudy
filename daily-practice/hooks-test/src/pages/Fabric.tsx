import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
const Fabric = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    //  const options = { ... };
    if (!canvasEl.current) return;
    const canvas = new fabric.Canvas(canvasEl.current);
    updateCanvasContext(canvas);
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    };
  }, []);
  const updateCanvasContext = (canvas: fabric.Canvas | null) => {
    if (!canvas) return;
    // const rect = new fabric.Rect({
    //   left: 50,
    //   top: 50,
    //   width: 100,
    //   height: 100,
    //   fill: "blue",
    // });
    // canvas.add(rect);
    // canvas.renderAll();
    fabric.Image.fromURL(
      "https://cj-links.oss-cn-beijing.aliyuncs.com/avator.jpg",
      (img) => {
        img.cornerStyle = "circle";

        // 设置圆形的目标大小
        const targetRadius = 100;

        // 计算缩放比例，让整个图片适配到圆形内
        const maxDimension = Math.max(img.width, img.height);
        const scale = (targetRadius * 2) / maxDimension;
        img.scale(scale);

        // 创建圆形裁剪路径
        const circle = new fabric.Circle({
          radius: targetRadius,
          left: 0,
          top: 0,
          originX: "center",
          originY: "center",
        });

        // 设置图片的裁剪路径为圆形
        img.clipPath = circle;

        // 设置图片位置居中
        img.set({
          left: 200,
          top: 200,
          originX: "center",
          originY: "center",
        });

        canvas.add(img);
        canvas.renderAll();
      }
    );
  };
  return (
    <div>
      <canvas ref={canvasEl} width={400} height={400} />
    </div>
  );
};

export default Fabric;
