import { theme, ConfigProvider } from "antd";
import React from "react";
import Home from "./Home/LayoutView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import { DataProvider } from "./Context/DataContext";

const App: React.FC = () => {
  const { Content } = Layout;
  return (
    <DataProvider>
      <Router>
        <ConfigProvider
          theme={{
            algorithm: [theme.darkAlgorithm],
            token: {
              // Seed Token
              colorPrimary: "#FFC436",
              borderRadius: 2,
              fontFamily: "TiltNeon",
              fontSize: 20,
              // Alias Token
              colorBgContainer: "#f6ffed",
            },
          }}
        >
          <Layout className="layout" style={{ minHeight: "100%" }}>
            <Content style={{ padding: "0 10px", marginTop: 5 }}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                </Route>
              </Routes>
            </Content>
          </Layout>
        </ConfigProvider>
      </Router>
    </DataProvider>
  );
};

export default App;
