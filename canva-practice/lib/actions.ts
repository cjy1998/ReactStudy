"use server";
import prisma from "./prisma";
import { UserSchema } from "./formValidationSchemas";
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
