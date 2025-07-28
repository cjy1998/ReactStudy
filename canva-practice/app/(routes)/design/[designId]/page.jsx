"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { designId } = useParams();
  console.log(designId);

  return (
    <div>
      <h1>设计详情</h1>
    </div>
  );
};

export default page;
