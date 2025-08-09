"use client";
import React, { useContext, useEffect, useState } from "react";
import UploadImage from "../Sharable/UploadImage";
import CustomTab from "@/components/CustomTab";
import { getUserFiles, getOfficialFiles } from "@/lib/actions";
import { UserDetailContext } from "@/context/UserDetailContext";
import useCanvasEditor from "@/hooks/UseCanvasHook";
import { FabricImage } from "fabric";
import CustomImg from "@/components/CustomImg";
import { uploadFile, deleteFile as deleteFileAction } from "@/lib/actions";
import { toast } from "sonner";

const options = [
  {
    label: "灵感库",
    value: "official",
  },
  {
    label: "我的",
    value: "my",
  },
];
const AddImageSetting = () => {
  const { userDetail } = useContext(UserDetailContext);
  const [files, setFiles] = useState([]);
  const { canvasEditor } = useCanvasEditor();
  const [activeTab, setActiveTab] = useState("official");
  const clickTab = async (value) => {
    setActiveTab(value);
    await getFiles(value);
  };
  const getFiles = async (value) => {
    let list = [];
    if (value === "my") {
      list = await getUserFiles(userDetail?.id);
    } else {
      list = await getOfficialFiles();
    }
    setFiles(list);
  };
  const handleClickImg = async (item) => {
    const canvasImageRef = await FabricImage.fromURL(item.url);
    canvasImageRef.set({
      scaleX: 0.1,
      scaleY: 0.1,
    });
    canvasEditor.add(canvasImageRef);
    canvasEditor.renderAll();
    // console.log(item);
  };
  const deleteFile = async (file) => {
    const { id } = file;
    // console.log(id);
    await deleteFileAction(id);
    await getFiles(activeTab);
    toast.success("删除成功");
  };
  const downloadFile = async (file) => {
    console.log(file);
  };
  const addFavorite = async (file) => {
    const { name, url, type, size } = file;
    await uploadFile({
      name,
      url,
      type,
      size,
      userId: userDetail?.id,
    });
    toast.success("收藏成功");
  };
  useEffect(() => {
    getFiles(activeTab);
  }, []);
  return (
    <div>
      <UploadImage />
      <CustomTab options={options} clickTab={clickTab} />
      <div className="flex flex-wrap justify-between gap-4">
        {files.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClickImg(item)}
            className="cursor-pointer"
          >
            <CustomImg
              key={item.id}
              file={item}
              deleteFile={(file) => deleteFile(file)}
              downloadFile={(file) => downloadFile(file)}
              addFavorite={(file) => addFavorite(file)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddImageSetting;
