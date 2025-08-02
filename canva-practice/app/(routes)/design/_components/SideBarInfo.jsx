import React from "react";

const SideBarInfo = ({ selected }) => {
  return (
    <div className="w-[280px] h-[calc(100vh-64px)] p-5 border-r ">
      <h2 className="font-bold"> {selected?.name}</h2>
      <p className="text-sm text-gray-500"> {selected?.desc}</p>
      <div className="mt-7">{selected?.component}</div>
    </div>
  );
};

export default SideBarInfo;
