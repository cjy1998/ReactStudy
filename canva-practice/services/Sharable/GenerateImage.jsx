import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
const GenerateImage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Textarea className="h-[200px]" placeholder="描述想要生成的图片" />
      <div>
        <h2 className="text-sm text-gray-700">模型</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <h2 className="text-sm text-gray-700">图片比例</h2>
        <div className="flex flex-wrap gap-2 ">
          <Button variant="outline">1:1</Button>
          <Button variant="outline">9:16</Button>
          <Button variant="outline">16:9</Button>
          <Button variant="outline">21:9</Button>
          <Button variant="outline">自定义</Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
