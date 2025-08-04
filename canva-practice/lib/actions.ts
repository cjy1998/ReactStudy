"use server";
import prisma from "./prisma";
import { DesignSchema, FileSchema, UserSchema } from "./formValidationSchemas";
const OSS = require("ali-oss");
const client = new OSS({
  // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: process.env.NEXT_PUBLIC_OSS_REGION,
  // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
  accessKeyId: process.env.NEXT_PUBLIC_OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.NEXT_PUBLIC_OSS_ACCESS_KEY_SECRET,
  // 填写Bucket名称。
  bucket: process.env.NEXT_PUBLIC_OSS_BUCKET,
  authorizationV4: true,
});
/**
 * 创建一个新的用户
 * @param data
 * @returns
 */
export const createUser = async (data: UserSchema) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!result) {
      const user = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          picture: data.picture,
        },
      });
      return user;
    } else {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
/**
 * 创建一个新的设计
 * @param data
 * @returns
 */
export const createNewDesign = async (data: DesignSchema) => {
  console.log("创建画布", data);

  try {
    const result = await prisma.design.create({
      data: {
        name: data.name,
        width: data.width,
        height: data.height,
        authorId: data.authorId,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
/**
 * 根据id获取设计
 * @param id
 * @returns
 */
export const getDesignById = async (id: number) => {
  try {
    const result = await prisma.design.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    // console.log(error);
  }
};
/**
 * oss 预签名
 */
async function generateSignatureUrl(fileName: string) {
  return await client.signatureUrlV4(
    "PUT",
    3600,
    {
      headers: {}, // 请根据实际发送的请求头设置此处的请求头
    },
    fileName
  );
}

/**
 * 上传图片至阿里云 oss
 */
export const uploadImage = async (file: File) => {
  const url = await generateSignatureUrl(file.name);
  // console.log(url);

  try {
    // 将 File 对象转换为 Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await client.put(file.name, buffer, {
      headers: {
        "Content-Type": file.type || "application/octet-stream",
      },
    });
    if (result.res.status === 200) {
      return result.url;
    }
  } catch (error) {
    console.log(error);
  }
};
/**
 * 上传文件
 * @param data
 * @returns
 */
export const uploadFile = async (data: FileSchema) => {
  try {
    console.log("data", data);
    const result = await prisma.file.create({
      data: {
        name: data.name,
        url: data.url,
        type: data.type,
        size: data.size,
        userId: data.userId,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
