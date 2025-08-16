import React, { useState } from "react";
import { shapesSettingsList } from "../Options";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import useCanvasEditor from "@/hooks/UseCanvasHook";
const ShapesSettings = () => {
  const { canvasEditor } = useCanvasEditor();

  return (
    <div>
      <div className="flex gap-4">
        {shapesSettingsList.map((item) => (
          <div key={item.value} className="hover:scale-105 transition-all">
            <Popover>
              <PopoverTrigger asChild>
                <Image
                  width={24}
                  height={24}
                  src={item.icon}
                  alt={item.name}
                  className="cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent>{item.component}</PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapesSettings;
