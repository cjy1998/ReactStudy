import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cj-links.oss-cn-beijing.aliyuncs.com", "imgbed.cj.abrdns.com"],
  },
  //   reactStrictMode: true,
  //   webpack: (config) => {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       "@": path.join(__dirname),
  //       "@components": path.join(__dirname, "components"),
  //       "@styles": path.join(__dirname, "styles"),
  //       "@utils": path.join(__dirname, "utils"),
  //       "@assets": path.join(__dirname, "assets"),
  //     };
  //     return config;
  //   },
};

export default nextConfig;
