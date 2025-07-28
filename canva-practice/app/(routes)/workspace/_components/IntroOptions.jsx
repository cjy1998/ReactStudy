"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { CanvasSizeOptions } from "@/services/Options";

import { UserDetailContext } from "@/context/UserDetailContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
const IntroOptions = () => {
  const { userDetail } = useContext(UserDetailContext);

  const createDesignRecord = useMutation(api.designs.CreateNewDesign);

  const router = useRouter();
  // 创建一个新的画布并将信息存储到数据库
  const SelectCanvasOption = async (item) => {
    toast("正在加载画布，请稍后 ...");
    const { name, width, height } = item;
    const res = await createDesignRecord({
      name,
      width,
      height,
      uid: userDetail?._id,
    });
    router.push(`/design/${res}`);
  };
  return (
    <div>
      <h2 className="text-xl font-bold">常用尺寸推荐</h2>

      <div className="flex gap-4 py-4">
        {CanvasSizeOptions.map((item) => (
          <div
            key={item.name}
            onClick={() => SelectCanvasOption(item)}
            className="flex flex-col items-center 
            gap-1 cursor-pointer"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={80}
              height={80}
              className="w-[48px] h-[48px] hover:scale-105 transition-all"
            />
            <p className="text-xs font-medium ">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroOptions;
