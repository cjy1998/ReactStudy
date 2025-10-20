import React from "react";
import { ShapeList } from "../Options";
import Image from "next/image";
import useCanvasEditor from "@/hooks/UseCanvasHook";
import { Circle, Rect, Triangle, Line, Polygon } from "fabric";
import { pasterList } from "../Options";
import { FabricImage } from "fabric";

const Shapes = () => {
  const { canvasEditor } = useCanvasEditor();
  // 创建五角星的点坐标
  const createStarPoints = (
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    points = 5
  ) => {
    const starPoints = [];
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i < points * 2; i++) {
      const angle = (i * angleStep) / 2 - Math.PI / 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      starPoints.push({ x, y });
    }
    return starPoints;
  };

  // 创建六边形的点坐标
  const createHexagonPoints = (centerX, centerY, radius) => {
    const hexPoints = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      hexPoints.push({ x, y });
    }
    return hexPoints;
  };
  const handleClick = (value) => {
    const props = {
      left: 100,
      top: 100,
      stroke: "#f47229",
      strokeWidth: 5,
      fill: "#f47229",
    };
    switch (value) {
      case "circle":
        const circle = new Circle({
          ...props,
          radius: 50,
        });
        canvasEditor.add(circle);
        break;
      case "rect":
        const rect = new Rect({
          ...props,
          width: 100,
          height: 100,
        });
        canvasEditor.add(rect);
        break;
      case "triangle":
        const triangle = new Triangle({
          ...props,
          width: 100,
          height: 100,
        });
        canvasEditor.add(triangle);
        break;
      case "line":
        const line = new Line([0, 0, 100, 100], {
          ...props,
        });
        canvasEditor.add(line);
        break;
      case "polygon":
        const hexPoints = createHexagonPoints(0, 0, 50);
        const polygon = new Polygon(hexPoints, {
          ...props,
          innerRadius: 20,
          outerRadius: 50,
        });
        canvasEditor.add(polygon);
        break;
      case "star":
        const starPoints = createStarPoints(0, 0, 50, 20, 5);
        const star = new Polygon(starPoints, {
          ...props,
        });
        canvasEditor.add(star);
        break;
    }
    canvasEditor.renderAll();
  };
  const handlePasterClick = async (item) => {
    const canvasImageRef = await FabricImage.fromURL(item);
    canvasImageRef.set({
      scaleX: 0.1,
      scaleY: 0.1,
    });
    canvasEditor.add(canvasImageRef);
    canvasEditor.renderAll();
  };
  return (
    <div>
      <p className="text-md">图形</p>
      <div className="grid grid-cols-3 gap-4 ">
        {ShapeList.map((item) => (
          <div
            key={item.name}
            onClick={() => handleClick(item.value)}
            className="p-2 cursor-pointer"
          >
            <Image src={item.icon} alt={item.name} width={80} height={80} />
          </div>
        ))}
      </div>
      <p className="text-md p-2">贴纸</p>
      <div className="grid grid-cols-3 gap-4 max-h-[60vh] overflow-auto">
        {pasterList.map((item, index) => (
          <div
            key={index}
            onClick={() => handlePasterClick(item)}
            className="p-2 cursor-pointer"
          >
            <Image src={item} alt={item} width={80} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shapes;
