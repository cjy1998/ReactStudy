import React from "react";
import { textSettingsList } from "../Options";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import FontStyle from "./FontStyle";

const TextSettings = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        {textSettingsList.map((item) => (
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
        <FontStyle />
      </div>
    </div>
  );
};

export default TextSettings;
