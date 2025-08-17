import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  picture: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;

export const designSchema = z.object({
  name: z.string().min(2).max(20),
  width: z.number(),
  height: z.number(),
  authorId: z.number(),
});

export type DesignSchema = z.infer<typeof designSchema>;

export const fileSchema = z.object({
  name: z.string(),
  url: z.string(),
  type: z.string(),
  size: z.number(),
  userId: z.number().optional(),
});

export type FileSchema = z.infer<typeof fileSchema>;

export const generateImageSchema = z.object({
  prompt: z
    .string()
    .min(2, { message: "最少输入2个字符" })
    .max(500, { message: "最多输入500个字符" }),
  provider: z.string().default("huoshan"),
  model: z.string(),
  size: z
    .enum([
      "1024x1024",
      "864x1152",
      "1152x864",
      "1280x720",
      "720x1280",
      "832x1248",
      "1248x832",
      "auto",
    ])
    .default("1024x1024"),
  response_format: z.enum(["url", "b64_json"]).default("b64_json"),
});

export type GenerateImageSchema = z.infer<typeof generateImageSchema>;
