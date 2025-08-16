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
  prompt: z.string(),
  provider: z.string(),
  model: z.string(),
  size: z.enum([
    "1024x1024",
    "auto",
    "1536x1024",
    "1024x1536",
    "256x256",
    "512x512",
    "1792x1024",
    "1024x1792",
  ]),
  response_format: z.enum(["url", "b64_json"]).default("url"),
});

export type GenerateImageSchema = z.infer<typeof generateImageSchema>;
