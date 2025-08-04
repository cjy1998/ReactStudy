import React, { useState, useContext } from "react";
import ImageKit from "imagekit";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon, LoaderIcon } from "lucide-react";
import { FabricImage } from "fabric";
import useCanvasEditor from "@/hooks/UseCanvasHook";
import { uploadImage as uploadImageToOSS, uploadFile } from "@/lib/actions";
import { UserDetailContext } from "@/context/UserDetailContext";

const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const { canvasEditor } = useCanvasEditor();
  const { userDetail } = useContext(UserDetailContext);

  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });
  const onFileUpload = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    console.log(file);

    try {
      // 上传至阿里云
      const res = await uploadImageToOSS(file);
      //   将信息保存到数据库
      const fileInfo = await uploadFile({
        name: file.name,
        url: res,
        type: file.type,
        size: file.size,
        userId: userDetail?.id,
      });
      console.log("fileInfo", fileInfo);

      const canvasImageRef = await FabricImage.fromURL(res);
      canvasImageRef.set({
        width: 100,
        height: 100,
      });
      canvasEditor.add(canvasImageRef);
      canvasEditor.renderAll();
      console.log(res);
      //   const imageRef = await imagekit.upload({
      //     file,
      //     fileName: file.name,
      //     isPublished: true,
      //   });
      //   console.log(imageRef);
      //   const canvasImageRef = await FabricImage.fromURL(imageRef?.url);
      //   canvasImageRef.set({
      //     width: 100,
      //     height: 100,
      //   });
      //   canvasEditor.add(canvasImageRef);
      //   canvasEditor.renderAll();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <label htmlFor="uploadImage">
        <div
          className={`p-2 bg-primary 
        rounded-md text-white flex  items-center justify-center gap-1 ${
          loading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        >
          {loading ? (
            <>
              <LoaderIcon className="animate-spin" />
              上传中...
            </>
          ) : (
            <>
              <UploadCloudIcon />
              上传图片
            </>
          )}
        </div>
      </label>
      <input
        type="file"
        id="uploadImage"
        multiple={false}
        className="hidden"
        onChange={onFileUpload}
      />
    </div>
  );
};

export default UploadImage;
