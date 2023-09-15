import React from "react";
import { Layout, Menu, Avatar, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
        <div>
          <span style={{ color: "white", marginRight: "10px" }}>
            Hello, User!
          </span>
          <Avatar size={40} icon={<UserOutlined />} />
        </div>
      </Header>

      <Row>
        <Col></Col>
        <Col span={6}>
          {/* Text Content */}
          <div className="content-section">Content goes here</div>
        </Col>
        <Col span={18}>
          {/* Big Image */}
          <img
            src="https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTkyMCUyMHglMjAxMDgwfGVufDB8fDB8fHww&w=1000&q=80"
            alt="Big"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col
          align="middle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Classes
        </Col>
        <Col>
          <Row>
            <Col span={24} justify="center">
              <Button.Group
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Space wrap>
                  <Button style={{ padding: "10px", margin: "5px" }}>
                    Class 1
                  </Button>
                  <Button style={{ padding: "10px", margin: "5px" }}>
                    Class 2
                  </Button>
                  <Button style={{ padding: "10px", margin: "5px" }}>
                    Class 3
                  </Button>
                </Space>
              </Button.Group>
            </Col>

            {/* Second Row of Buttons */}

            <Col span={24} justify="center">
              <Button.Group
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Space wrap>
                  <Button style={{ padding: "10px", margin: "5px" }}>
                    Class 4
                  </Button>
                  <Button style={{ padding: "10px", margin: "5px" }}>
                    Class 5
                  </Button>
                  <Button style={{ padding: "10px", margin: "5px" }}>
                    Class 6
                  </Button>
                </Space>
              </Button.Group>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer style={{ textAlign: "center" }}>
        {/* Footer */}
        Your Footer Content
      </Footer>
    </Layout>
  );
}

export default HomePage;