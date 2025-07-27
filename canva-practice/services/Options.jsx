import { Folder, Home, LayoutTemplate, WalletCards } from "lucide-react";

export const WorkspaceMenu = [
  {
    name: "首页",
    icon: Home,
    path: "/workspace",
  },
  {
    name: "项目",
    icon: Folder,
    path: "/workspace/projects",
  },
  {
    name: "模板",
    icon: LayoutTemplate,
    path: "/workspace/templates",
  },
  {
    name: "资产",
    icon: WalletCards,
    path: "/workspace/billing",
  },
];

export const CanvasSizeOptions = [
  {
    name: "小红书（3:4）",
    icon: "/xhs-logo.svg",
    width: 1242,
    height: 2208,
  },
  {
    name: "横版视频封面（16:9）",
    icon: "/dy-logo.svg",
    width: 1920,
    height: 1080,
  },
  {
    name: "公众号首图",
    icon: "/wx-logo.svg",
    width: 1800,
    height: 766,
  },
  {
    name: "公众号次图",
    icon: "/wx-logo.svg",
    width: 1000,
    height: 1000,
  },
  {
    name: "PPT（16:9）",
    icon: "/ppt-logo.svg",
    width: 1920,
    height: 1080,
  },
  {
    name: "PPT（4:3）",
    icon: "/ppt-logo.svg",
    width: 1440,
    height: 1080,
  },
  {
    name: "名片",
    icon: "/card-logo.svg",
    width: 96,
    height: 60,
  },
];
