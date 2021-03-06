import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function AdminIndex() {
  
  const [collapsed, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null}  collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="3">添加文章</Menu.Item>
            <Menu.Item key="4">文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} >
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onCollapse}
        />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>博客工作台.</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>SoleiQ</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminIndex;