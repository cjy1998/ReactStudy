import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GenerateImage from "../Sharable/GenerateImage";
const AiCreateImg = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="text">
        <TabsList>
          <TabsTrigger value="text">文生图</TabsTrigger>
          <TabsTrigger value="image">图生图</TabsTrigger>
        </TabsList>
        <TabsContent value="text">
          <GenerateImage />
        </TabsContent>
        <TabsContent value="image">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default AiCreateImg;
