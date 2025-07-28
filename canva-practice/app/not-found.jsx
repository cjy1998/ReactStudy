import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Image
        src="/not-found.svg"
        alt="not-found"
        width={400}
        height={400}
        className="w-1/4 h-1/4"
      />
      <Link href="/workspace">
        <Button className="cursor-pointer" variant="secondary">
          返回首页
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
