import React from "react";
import ShapesSettings from "../Sharable/ShapesSettings";
import TextSettings from "../Sharable/TextSettings";
import useStore from "@/lib/store";
const TopNavBar = () => {
  const menu = useStore((state) => state.sideBarMenu);
  return (
    <div>
      {menu === "shape" && (
        <div
          className=" bg-white p-2 rounded-md shadow-md 
    absolute top-[10px] left-[50%] translate-x-[-50%] z-10"
        >
          <ShapesSettings />
        </div>
      )}
      {menu === "text" && (
        <div
          className=" bg-white p-2 rounded-md shadow-md 
    absolute top-[10px] left-[50%] translate-x-[-50%] z-10"
        >
          <TextSettings />
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
