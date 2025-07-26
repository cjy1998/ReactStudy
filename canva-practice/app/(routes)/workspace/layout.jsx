import React from "react";
import WorkSpaceHeader from "./_components/WorkSpaceHeader";
import Siderbar from "./_components/Siderbar";
const workspaceLayout = ({ children }) => {
  return (
    <>
      <WorkSpaceHeader />
      <div className="flex h-screen">
        <Siderbar />
        {children}
      </div>
    </>
  );
};

export default workspaceLayout;
