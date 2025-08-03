"use server";
import prisma from "./prisma";
import { DesignSchema, UserSchema } from "./formValidationSchemas";
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
