"use client";
import React, { useState } from "react";

const SelectSize = ({ handleSelectedRatio }) => {
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const ratios = [
    {
      label: "1:1",
      value: "1024x1024",
    },
    {
      label: " 2:3",
      value: "832x1248",
    },
    {
      label: "3:4",
      value: "864x1152",
    },
    {
      label: "16:9",
      value: "1280x720",
    },
  ];
  const activeRatio = (value) => {
    setSelectedRatio(value);
    handleSelectedRatio(value);
  };

  const getButtonClasses = (ratio) => {
    const isSelected = selectedRatio === ratio;
    const baseClasses = "px-3 py-1 border rounded-md cursor-pointer text-sm";
    if (isSelected) {
      return `${baseClasses} border-orange-600 bg-orange-100 text-orange-600 font-bold`;
    }
    return `${baseClasses} border-gray-300 bg-gray-100 text-gray-800`;
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 max-w-xs   ">
        {ratios.map((ratio) => (
          <div
            key={ratio.value}
            className={getButtonClasses(ratio.value)}
            onClick={() => activeRatio(ratio.value)}
          >
            {ratio.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSize;
