"use client";
import React, { useContext, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2Icon } from "lucide-react";
const CustomCanvasDialog = ({ children }) => {
  const { userDetail } = useContext(UserDetailContext);
  const createDesignRecord = useMutation(api.designs.CreateNewDesign);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      width: 500,
      height: 500,
    },
  });
  const [Loading, setLoading] = useState(false);
  const CreateCustomCanvas = async (data) => {
    setLoading(true);
    toast("正在创建画布，请稍后 ...");
    const { name, width, height } = data;
    const res = await createDesignRecord({
      name,
      width: Number(width),
      height: Number(height),
      uid: userDetail?._id,
    });
    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>自定义画布尺寸</DialogTitle>
          <DialogDescription>
            您可以自定义画布尺寸，以适应不同的设计需求。
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit((data) => CreateCustomCanvas(data))}>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="text-sm">设计名称</label>
              <Input
                {...register("name", {
                  required: "请输入设计名称",
                  maxLength: 15,
                })}
                className="mt-1"
                placeholder="请输入设计名称"
              />
              {errors.name && (
                <p className="text-xs mt-0.5 text-red-500">
                  设计名称最长为15个字符
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="text-sm">宽度</label>
                <Input
                  {...register("width", {
                    required: "请输入宽度",
                    pattern: /\d+/,
                  })}
                  className="mt-1"
                  placeholder="500"
                />
                {errors.width && (
                  <p className="text-xs mt-0.5 text-red-500">宽度必须为数字</p>
                )}
              </div>
              <div className="w-full">
                <label className="text-sm">高度</label>
                <Input
                  {...register("height", {
                    required: "请输入高度",
                    pattern: /\d+/,
                  })}
                  className="mt-1"
                  placeholder="500"
                />
                {errors.height && (
                  <p className="text-xs mt-0.5 text-red-500">高度必须为数字</p>
                )}
              </div>
            </div>
            <Button disabled={Loading} type="submit">
              {Loading ? <Loader2Icon className="animate-spin" /> : "确认"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomCanvasDialog;
