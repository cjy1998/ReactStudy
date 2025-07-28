import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "练习",
    icon: <MailOutlined />,
    children: [
      {
        key: "/hooks",
        label: "Hooks练习",
      },
      {
        key: "/reacttype",
        label: "React结合Ts练习",
      },
    ],
  },
  {
    key: "sub2",
    label: "gsap练习",
    icon: <AppstoreOutlined />,
    children: [
      { key: "/gsap", label: "基础练习" },
      { key: "/gsap2", label: "进阶练习" },
    ],
  },
  {
    key: "sub4",
    label: "组件练习",
    icon: <SettingOutlined />,
    children: [
      { key: "/control", label: "受控与非受控组件" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "sub5",
    label: "canvas练习",
    icon: <SettingOutlined />,
    children: [{ key: "/fabric", label: "fabric" }],
  },
];

const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      className="w-full h-full overflow-y-auto"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;
