import React from "react";
import Image from "next/image";
import { UserButton } from "@stackframe/stack";

const WorkSpaceHeader = () => {
  return (
    <div className="w-full px-4 py-3 flex justify-between items-center shadow-sm">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-[48px] h-[48px]"
      />
      <UserButton />
    </div>
  );
};

export default WorkSpaceHeader;
