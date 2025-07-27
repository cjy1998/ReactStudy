"use client";
import React from "react";
import { WorkspaceMenu } from "@/services/Options";
import Link from "next/link";
import CustomCanvasDialog from "./CustomCanvasDialog";
import { CirclePlus } from "lucide-react";
import { usePathname } from "next/navigation";
const Siderbar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-[100px] shadow-sm p-2 py-8  bg-orange-50">
      <CustomCanvasDialog>
        <div className="flex flex-col items-center justify-center mb-4 cursor-pointer hover:scale-110 transition duration-300 hover:text-amber-600">
          <CirclePlus className="bg-amber-600 text-white rounded-full h-8 w-8" />
          <h2 className="text-sm">新建</h2>
        </div>
      </CustomCanvasDialog>

      {WorkspaceMenu.map((item) => (
        <Link href={item.path} key={item.name}>
          <div
            key={item.name}
            className={`flex flex-col items-center justify-center 
                mb-2 p-2 px-4 rounded-xl cursor-pointer 
                hover:bg-amber-50 hover:text-amber-500 
                group ${item.path == pathname && "bg-amber-100 text-amber-600 "}`}
          >
            <item.icon className="group-hover:scale-110  transition duration-300" />
            <h2 className="group-hover:scale-105 transition duration-300 text-sm">
              {item.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Siderbar;
