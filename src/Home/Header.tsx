import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link as ScrollLink } from "react-scroll";

const { Header } = Layout;

const menuItems = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Work and Play", key: "work-and-play" },
  { label: "Contact", key: "contact" },
];

const AppHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateWidth = () => setScreenWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const isMobile = screenWidth < 800;

  const renderMenu = () => (
    <Menu
      mode={isMobile ? "vertical" : "horizontal"}
      theme="dark"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "black",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
      }}
    >
      {menuItems.map((item: any, index: number) => (
        <Menu.Item key={index}>
          <ScrollLink to={item.key} smooth={true} offset={-70} duration={500}>
            {item.label}
          </ScrollLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Header
        style={{
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "black",
          }}
        >
          <div style={{ flex: 0.5 }}>
            <Link to="/">Logo</Link>
          </div>
          <div
            style={{
              flex: 0.5,
              width: "100%",
              height: "100%",
            }}
          >
            {isMobile ? (
              <>
                <Button
                  type="primary"
                  icon={<MenuOutlined />}
                  onClick={() => setVisible(true)}
                  style={{ float: "right", marginTop: "16px" }}
                />
                <Drawer
                  title="Menu"
                  placement="right"
                  closable={true}
                  onClose={() => setVisible(false)}
                  visible={visible}
                >
                  {renderMenu()}
                </Drawer>
              </>
            ) : (
              renderMenu()
            )}
          </div>
        </div>
      </Header>
      <Outlet />
    </>
  );
};

export default AppHeader;
