import React from "react";
import DesignHeader from "./_components/DesignHeader";

const Designlayout = ({ children }) => {
  return (
    <div>
      <DesignHeader />
      {children}
    </div>
  );
};

export default Designlayout;
