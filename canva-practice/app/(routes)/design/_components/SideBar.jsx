"use client";
import { sideBarMenu } from "@/services/Options";
import React, { useState } from "react";
import { SideBarSettings } from "../_components/SideBarSettings";
import SideBarInfo from "../_components/SideBarInfo";

const SideBar = () => {
  const [selected, setSelected] = useState();
  const hanelSelect = (item) => {
    setSelected(item);
  };
  const [isShow, setIsShow] = useState(true);
  const changeShow = (isShow) => {
    setIsShow(isShow);
  };
  return (
    <div className="flex">
      <div
        className={`${!isShow ? "hidden" : ""} p-2 w-[80px] h-[calc(100vh-64px)] 
      border-r border-gray-200 shadow-md`}
      >
        {sideBarMenu.map((item) => (
          <div
            key={item.name}
            onClick={() => hanelSelect(item)}
            className={` p-2 mb-2 flex flex-col items-center 
          cursor-pointer hover:bg-secondary rounded-md ${item.name === selected ? "bg-secondary" : ""}`}
          >
            <item.icon className="w-6 h-6" />
            <span className="mt-1 text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
      <div className={`${selected ? "hidden" : ""}`}>
        <SideBarSettings changeShow={changeShow} />
      </div>
      <div className={`${selected ? "" : "hidden"}`}>
        <SideBarInfo selected={selected} />
      </div>
    </div>
  );
};

export default SideBar;
