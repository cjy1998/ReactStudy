// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "@/router/main";
import { RouterProvider } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // {/* </StrictMode> */}
);
