import { createBrowserRouter, type RouteObject } from "react-router-dom";

import App from "../App";
import HooksTest from "@/pages/HooksTest";
import ReactType from "@/pages/ReactType";
import Layout from "@/layout/Layout";
import GsapTest from "@/pages/GsapTest";

// 为路由配置数组提供类型定义
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/hooks",
        element: <HooksTest />,
      },
      {
        path: "/reacttype",
        element: <ReactType />,
      },
      {
        path: "/gsap",
        element: <GsapTest />,
      },
    ],
  },
];

// createBrowserRouter 会返回一个 Router 类型的对象
// 无需手动指定类型，TypeScript 会自动推断
const router = createBrowserRouter(routes);

export default router;
