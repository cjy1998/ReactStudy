import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  height: "100%",
  backgroundColor: "#fff",
  overflowY: "scroll",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

const Index: React.FC = () => (
  <Layout style={layoutStyle}>
    {/* <Header style={headerStyle}>Header</Header> */}
    <Layout>
      <Sider width="20%" style={siderStyle}>
        <SideMenu />
      </Sider>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
    {/* <Footer style={footerStyle}>Footer</Footer> */}
  </Layout>
);

export default Index;
