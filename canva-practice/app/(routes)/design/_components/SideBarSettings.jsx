import React, { useState } from "react";
import { PanelRightOpen, PanelRightClose } from "lucide-react";
export const SideBarSettings = ({ changeShow }) => {
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow(!isShow);
    changeShow(!isShow);
  };
  return (
    <div onClick={handleClick} className="ml-2 mt-2 cursor-pointer">
      {isShow ? <PanelRightOpen /> : <PanelRightClose />}
    </div>
  );
};
