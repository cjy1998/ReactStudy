"use server";
import prisma from "./prisma";
import {
  DesignSchema,
  FileSchema,
  UserSchema,
  GenerateImageSchema,
} from "./formValidationSchemas";
import OpenAI from "openai";
const OSS = require("ali-oss");
// 实例化oss
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
// 实例化openai
const openai = (url: string, key: string) => {
  return new OpenAI({
    baseURL: url,
    apiKey: key,
    timeout: 180000,
  });
};
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
/**
 * 查询用户文件
 */
export const getUserFiles = async (userId: number) => {
  try {
    const result = await prisma.file.findMany({
      where: {
        userId,
        isDeleted: false,
        isOffice: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
/**
 * 查询官方文件
 */
export const getOfficialFiles = async () => {
  try {
    const result = await prisma.file.findMany({
      where: {
        isOffice: true,
        isDeleted: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
/**
 * 删除文件
 */
export const deleteFile = async (id: number) => {
  try {
    const result = await prisma.file.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
/**
 * 生成图片
 */
const generateImage = async (data: GenerateImageSchema) => {
  if (data.provider === "huoshan") {
    const client = openai(
      "https://ark.cn-beijing.volces.com/api/v3",
      process.env.HOU_SHAN_API_KEY
    );
    const res = await client.images.generate({
      model: data.model,
      prompt: data.prompt,
      size: data.size,
      response_format: data.response_format,
    });
    const result = {
      url: res.data[0].url,
      usage: res.usage?.total_tokens,
    };
    return result;
  }
};
