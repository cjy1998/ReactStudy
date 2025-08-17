import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * 将 url 图片转换为 File 对象
 * @param {string} dataurl - url 图片字符串
 * @param {string} filename - 文件名
 * @returns {Promise<File>} - File 对象
 */
export async function dataURLtoFile(dataurl, filename) {
  const res = await fetch(dataurl);
  const blob = await res.blob();
  const mime = blob.type;
  const buffer = Buffer.from(await blob.arrayBuffer());
  return { buffer, filename, mime };
}
