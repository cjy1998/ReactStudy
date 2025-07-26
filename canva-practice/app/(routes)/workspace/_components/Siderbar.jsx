import React from "react";
import { WorkspaceMenu } from "@/services/Options";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
const Siderbar = () => {
  return (
    <div className="h-full shadow-sm p-2  bg-orange-50">
      <div className="flex justify-center mb-4 cursor-pointer hover:scale-110 transition duration-300">
        <CirclePlus className="bg-amber-600 text-white rounded-full h-8 w-8" />
      </div>
      {WorkspaceMenu.map((item) => (
        <Link href={item.path} key={item.name}>
          <div
            key={item.name}
            className="flex flex-col items-center justify-center mb-2 p-2 px-4 rounded-xl cursor-pointer hover:bg-amber-100 hover:text-amber-600 group"
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
