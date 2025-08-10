import {
  Component,
  Folder,
  Gpu,
  Home,
  Image,
  LayoutTemplate,
  Settings,
  ShapesIcon,
  Type,
  WalletCards,
} from "lucide-react";
import BackrgoundSetting from "./Components/BackrgoundSetting";
import AddImageSetting from "./Components/AddImageSetting";
import Elements from "./Components/Elements";
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

export const sideBarMenu = [
  {
    name: "模板",
    desc: "选择预设模板",
    icon: LayoutTemplate,
  },
  {
    name: "图形",
    desc: "添加图形",
    icon: ShapesIcon,
    component: <Elements />,
  },
  {
    name: "图片",
    desc: "添加图片元素",
    icon: Image,
    component: <AddImageSetting />,
  },
  {
    name: "文本",
    desc: "添加文本元素",
    icon: Type,
  },
  {
    name: "AI",
    desc: "使用AI生成内容",
    icon: Gpu,
  },
  {
    name: "背景",
    desc: "更换背景",
    icon: Component,
    component: <BackrgoundSetting />,
  },
  {
    name: "设置",
    desc: "配置设计参数",
    icon: Settings,
  },
];

export const ShapeList = [
  {
    name: "矩形",
    value: "rect",
    icon: "/shape/rect.svg",
  },
  {
    name: "圆形",
    value: "circle",
    icon: "/shape/circle.svg",
  },
  {
    name: "三角形",
    value: "triangle",
    icon: "/shape/triangle.svg",
  },
  {
    name: "多边形",
    value: "polygon",
    icon: "/shape/polygon.svg",
  },
  {
    name: "线段",
    value: "line",
    icon: "/shape/line.svg",
  },
  {
    name: "五角星",
    value: "star",
    icon: "/shape/star.svg",
  },
];
export const shapesSettingsList = [
  {
    name: "填充",
    value: "fill",
    icon: "/shape/setting/fill.svg",
  },
  {
    name: "边框宽度",
    value: "strokeWidth",
    icon: "/shape/setting/strokeWidth.svg",
  },
  {
    name: "边框颜色",
    value: "strokeColor",
    icon: "/shape/setting/strokeColor.svg",
  },
  {
    name: "圆角",
    value: "radius",
    icon: "/shape/setting/radius.svg",
  },
  {
    name: "透明度",
    value: "opacity",
    icon: "/shape/setting/opacity.svg",
  },
  {
    name: "删除",
    value: "delete",
    icon: "/delete.svg",
  },
];
