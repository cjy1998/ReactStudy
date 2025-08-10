import React from "react";
import ShapesSettings from "../Sharable/ShapesSettings";
const TopNavBar = () => {
  return (
    <div
      className=" bg-white p-2 rounded-md shadow-md 
    absolute top-[10px] left-[50%] translate-x-[-50%] z-10"
    >
      <ShapesSettings />
    </div>
  );
};

export default TopNavBar;
