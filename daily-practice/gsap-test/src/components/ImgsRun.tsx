import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
gsap.registerPlugin(InertiaPlugin);

const ImgsRun = () => {
  const svgsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setSvgRef = (index: number) => (el: HTMLDivElement | null) => {
    svgsRef.current[index] = el;
  };

  const images = [
    "src/assets/svg/js.svg",
    "src/assets/svg/tailwindcss.svg",
    "src/assets/svg/vue.svg",
    "src/assets/svg/react.svg",
    "src/assets/svg/canvas.svg",
    "src/assets/svg/threejs.svg",
    "src/assets/svg/nextjs.svg",
    "src/assets/svg/nestjs.svg",
  ];
  let oldX = 0,
    oldY = 0,
    deltaX = 0,
    deltaY = 0;
  const handleMouseMove = (e: React.MouseEvent) => {
    deltaX = e.clientX - oldX;

    // Calculate vertical movement since the last mouse position
    deltaY = e.clientY - oldY;

    // Update old coordinates with the current mouse position
    oldX = e.clientX;
    oldY = e.clientY;
    console.log(deltaX, deltaY);
  };
  useEffect(() => {
    svgsRef.current.forEach((svg) => {
      if (svg) {
        svg.addEventListener("mouseenter", () => {
          const tl = gsap.timeline({
            onComplete: () => {
              tl.kill();
            },
          });
          tl.timeScale(1.2);
          const image = svg.querySelector("img");
          tl.to(image, {
            inertia: {
              x: {
                velocity: deltaX * 30, // Higher number = movement amplified
                end: 0, // Go back to the initial position
              },
              y: {
                velocity: deltaY * 30, // Higher number = movement amplified
                end: 0, // Go back to the initial position
              },
            },
          });
          tl.fromTo(
            image,
            {
              rotate: 0,
            },
            {
              duration: 0.4,
              rotate: (Math.random() - 0.5) * 30, // Returns a value between -15 & 15
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut", // Will slow at the begin and the end
            },
            "<"
          );
        });
      }
    });
  }, [deltaX, deltaY]);
  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full h-full grid grid-cols-4 gap-4"
    >
      {images.map((src, index) => (
        <div key={index} ref={setSvgRef(index)}>
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImgsRun;
