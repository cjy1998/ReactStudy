"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CustomCanvasDialog from "./CustomCanvasDialog";
const RecentDesign = () => {
  const [recentDesignList, setRecentDesignList] = useState([]);
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold">最近打开</h2>
      <div className="mt-6">
        {recentDesignList.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/empty.svg"
              alt="暂无最近打开的设计"
              width={200}
              height={200}
            />
            <h2 className="text-center text-sm text-gray-400">
              暂无最近打开的设计
            </h2>
            <CustomCanvasDialog>
              <Button>
                <Plus /> 新建设计
              </Button>
            </CustomCanvasDialog>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecentDesign;
