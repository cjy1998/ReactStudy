import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewDesign = mutation({
  args: {
    name: v.string(),
    width: v.number(),
    height: v.number(),
    uid: v.id("users"),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("designs", {
      name: args.name,
      width: args.width,
      height: args.height,
      uid: args.uid,
    });
    return result;
  },
});
export const GetDesignRecord = query({
  args: {
    id: v.id("designs"),
  },
  handler: async (ctx, args) => {
    const designRecord = await ctx.db.get(args.id);
    if (designRecord) {
      return designRecord;
    }
    throw new Error("设计不存在");
  },
});
