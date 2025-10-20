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
  TypeOutline,
} from "lucide-react";
import BackrgoundSetting from "./Components/BackrgoundSetting";
import AddImageSetting from "./Components/AddImageSetting";
import Elements from "./Components/Elements";
import AiCreateImg from "./Components/AiCreateImg";
import FillColor from "./Sharable/FillColor";
import BorderColor from "./Sharable/BorderColor";
import SliderWithOrRadius from "./Sharable/SliderWithOrRadius";
import TextSettings from "./Components/TextSettings";
import FontFamily from "./Sharable/FontFamily";
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
    value: "template",
    desc: "选择预设模板",
    icon: LayoutTemplate,
  },
  {
    name: "素材",
    value: "shape",
    desc: "添加素材",
    icon: ShapesIcon,
    component: <Elements />,
  },
  {
    name: "图片",
    value: "image",
    desc: "添加图片元素",
    icon: Image,
    component: <AddImageSetting />,
  },
  {
    name: "文本",
    value: "text",
    desc: "添加文本元素",
    icon: Type,
    component: <TextSettings />,
  },
  {
    name: "AI",
    value: "ai",
    desc: "使用AI生成内容",
    icon: Gpu,
    component: <AiCreateImg />,
  },
  {
    name: "背景",
    value: "background",
    desc: "更换背景",
    icon: Component,
    component: <BackrgoundSetting />,
  },
  {
    name: "设置",
    value: "setting",
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
    component: <FillColor />,
  },
  {
    name: "边框宽度",
    value: "strokeWidth",
    icon: "/shape/setting/strokeWidth.svg",
    component: (
      <SliderWithOrRadius
        defaultValue={[3]}
        max={20}
        step={1}
        type="strokeWidth"
      />
    ),
  },
  {
    name: "边框颜色",
    value: "strokeColor",
    icon: "/shape/setting/strokeColor.svg",
    component: <BorderColor />,
  },
  {
    name: "圆角",
    value: "radius",
    icon: "/shape/setting/radius.svg",
    component: (
      <SliderWithOrRadius defaultValue={[0]} max={100} step={1} type="radius" />
    ),
  },
  {
    name: "透明度",
    value: "opacity",
    icon: "/shape/setting/opacity.svg",
    component: (
      <SliderWithOrRadius
        defaultValue={[1]}
        max={1}
        step={0.1}
        type="opacity"
      />
    ),
  },
];

export const modelList = [
  {
    label: "Doubao-SeedEdit-3.0-i2i",
    value: "doubao-seededit-3-0-i2i-250628",
    provider: "huoshan",
    type: "image",
  },
  {
    label: "Doubao-Seedream-3.0-t2i",
    value: "doubao-seedream-3-0-t2i-250415",
    provider: "huoshan",
    type: "text",
  },
];

export const textSettingsList = [
  {
    name: "填充",
    value: "fill",
    icon: "/shape/setting/fill.svg",
    component: <FillColor />,
  },
  {
    name: "边框宽度",
    value: "strokeWidth",
    icon: "/shape/setting/strokeWidth.svg",
    component: (
      <SliderWithOrRadius
        defaultValue={[3]}
        max={20}
        step={1}
        type="strokeWidth"
      />
    ),
  },
  {
    name: "边框颜色",
    value: "strokeColor",
    icon: "/shape/setting/strokeColor.svg",
    component: <BorderColor />,
  },
  {
    name: "字体",
    value: "fontFamily",
    icon: "/shape/setting/font.svg",
    component: <FontFamily />,
  },
  {
    name: "透明度",
    value: "opacity",
    icon: "/shape/setting/opacity.svg",
    component: (
      <SliderWithOrRadius
        defaultValue={[1]}
        max={1}
        step={0.1}
        type="opacity"
      />
    ),
  },
];

export const FontFamilyList = [
  {
    name: "微软雅黑",
    value: "Microsoft YaHei",
  },
  {
    name: "宋体",
    value: "SimSun",
  },
  {
    name: "黑体",
    value: "SimHei",
  },
  {
    name: "楷体",
    value: "KaiTi",
  },
  {
    name: "阿里妈妈刀隶体测试",
    value: "alidlt",
  },
  {
    name: "阿里妈妈方圆体",
    value: "alifangyuan",
  },
];

export const pasterList = [
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/OK.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/haha.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E4%B8%8D%E9%AB%98%E5%85%B4.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E4%B9%96.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%86%B7.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%8B%89%E5%BC%BA.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%90%90.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%90%90%E8%88%8C.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%91%B5%E5%91%B5.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%91%BC%7E.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%92%A6.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%93%88%E5%93%88.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%95%8A.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%96%B7.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%A4%A7%E6%8B%87%E6%8C%87.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%A4%AA%E5%BC%80%E5%BF%83.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%A4%AA%E9%98%B3.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%A7%94%E5%B1%88.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%BC%80%E5%BF%83.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%BC%B1.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%BD%A9%E8%99%B9.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E5%BF%83%E7%A2%8E.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%80%92.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%83%8A%E5%93%AD.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%83%8A%E8%AE%B6.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%98%9F%E6%98%9F%E6%9C%88%E4%BA%AE.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%B1%97.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%B3%AA.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E6%BB%91%E7%A8%BD.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%81%AF%E6%B3%A1.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%88%B1%E5%BF%83.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%8B%82%E6%B1%97.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%8E%AB%E7%91%B0.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%94%9F%E6%B0%94.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%96%91%E9%97%AE.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%9C%9F%E6%A3%92.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%9D%A1%E8%A7%89.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%9D%A1%E8%A7%89.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%A4%BC%E7%89%A9.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E7%AC%91%E7%9C%BC.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E8%83%9C%E5%88%A9.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E8%8A%B1%E5%BF%83.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E8%8C%B6%E6%9D%AF.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E8%9B%8B%E7%B3%95.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%84%99%E8%A7%86.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%85%B7.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%92%B1.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%92%B1%E5%B8%81.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%98%B4%E9%99%A9.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%9F%B3%E4%B9%90.png",
  "https://cj-links.oss-cn-beijing.aliyuncs.com/Paopao%20stickers%20%E8%B4%B4%E5%90%A7%E6%B3%A1%E6%B3%A1%E8%A1%A8%E6%83%85%20%28Community%29/%E9%BB%91%E7%BA%BF.png",
];
