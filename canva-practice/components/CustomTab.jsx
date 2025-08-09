import React, { useState } from "react";

const CustomTab = ({ options, clickTab }) => {
  const [activeTab, setActiveTab] = useState(options[0].value);
  const handleClick = (value) => {
    setActiveTab(value);
    clickTab(value);
  };
  return (
    <div className="my-3 flex justify-around ">
      {options.length &&
        options.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              handleClick(item.value);
            }}
            className={`
              cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out
              relative border-b-2 
              ${
                activeTab === item.value
                  ? "text-orange-600 border-orange-500 "
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
              }
        
            `}
          >
            {item.label}
            {/* 活跃状态的指示器 */}
            {activeTab === item.value && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default CustomTab;
