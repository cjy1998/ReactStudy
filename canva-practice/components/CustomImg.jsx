import React from "react";
import Image from "next/image";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
const CustomImg = ({ file, deleteFile, downloadFile, addFavorite }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteFile(file);
  };
  const handleDownload = (e) => {
    e.stopPropagation();
    downloadFile(file);
  };
  const handleAddFavorite = (e) => {
    e.stopPropagation();
    addFavorite(file);
  };
  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger>
          <Image
            src={file.url}
            alt={file.name}
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={(e) => handleDownload(e)}>
            下载
          </ContextMenuItem>
          {file.isOffice ? (
            <ContextMenuItem onClick={(e) => handleAddFavorite(e)}>
              收藏
            </ContextMenuItem>
          ) : (
            <ContextMenuItem onClick={(e) => handleDelete(e)}>
              <span className="text-red-500">删除</span>
            </ContextMenuItem>
          )}
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default CustomImg;
