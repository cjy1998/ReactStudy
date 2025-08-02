import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  picture: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;
