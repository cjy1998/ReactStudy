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
