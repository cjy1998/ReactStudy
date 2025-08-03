import React, { useState } from "react";
import ImageKit from "imagekit";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon, LoaderIcon } from "lucide-react";
import { FabricImage } from "fabric";
import useCanvasEditor from "@/hooks/UseCanvasHook";
const OSS = require("ali-oss");
const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const { canvasEditor } = useCanvasEditor();

  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });
  const client = new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: process.env.NEXT_PUBLIC_OSS_REGION,
    // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
    accessKeyId: process.env.NEXT_PUBLIC_OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.NEXT_PUBLIC_OSS_ACCESS_KEY_SECRET,
    authorizationV4: true,
    // 填写Bucket名称。
    bucket: process.env.NEXT_PUBLIC_OSS_BUCKET,
  });
  const onFileUpload = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    try {
      //   const res = client.put(file.name, file);
      //   console.log(res);

      const imageRef = await imagekit.upload({
        file,
        fileName: file.name,
        isPublished: true,
      });
      console.log(imageRef);
      const canvasImageRef = await FabricImage.fromURL(imageRef?.url);
      canvasImageRef.set({
        width: 100,
        height: 100,
      });
      canvasEditor.add(canvasImageRef);
      canvasEditor.renderAll();
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
