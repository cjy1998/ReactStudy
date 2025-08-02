"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import DesignHeader from "../_components/DesignHeader";
import SideBar from "../_components/SideBar";
import CanvasEditor from "../_components/CanvasEditor";
import { CanvasEditorContext } from "@/context/CanvasEditor";
const page = () => {
  const { designId } = useParams();
  const designInfo = useQuery(api.designs.GetDesignRecord, {
    id: designId,
  });
  const [canvasEditor, setCanvasEditor] = useState();
  return (
    <CanvasEditorContext value={{ canvasEditor, setCanvasEditor }}>
      <div>
        <DesignHeader designInfo={designInfo} />
        <div className="flex">
          <SideBar />
          <CanvasEditor designInfo={designInfo} />
        </div>
      </div>
    </CanvasEditorContext>
  );
};

export default page;
