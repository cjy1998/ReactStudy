import React from "react";
import { FontFamilyList } from "../Options";

const FontFamily = () => {
  return (
    <div className="height-[200px] overflow-y-auto">
      {FontFamilyList.map((item) => (
        <h2
          className="text-lg  cursor-pointer bg-secondary rounded-md p-2 mb-1 hover:border-amber-500 border-1"
          key={item.value}
          style={{
            fontFamily: `${item.value}, sans-serif`,
          }}
        >
          {item.name}
        </h2>
      ))}
    </div>
  );
};

export default FontFamily;
