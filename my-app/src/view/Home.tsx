import React, { useState } from 'react';
import {DesktopOutlined,FileOutlined,
  PieChartOutlined,TeamOutlined,UserOutlined,} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import { useNavigate ,  Outlet, useLocation} from "react-router-dom";


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {token: { colorBgContainer },} = theme.useToken();

/* ----------------------------------------------业务代码--------------------------------------------*/
  
/* 实现点击左侧边栏跳转*/
  const navigate = useNavigate()
  const menuClick = (e:{key:string}) =>{
      // console.log(e.key);             //--> 这个e.key拿到的就是MenuItem里的第二个参数,所有可以用来设置路由跳转
      navigate(e.key)
  }

/* 使用useLocation找到当前路由, 设置Menu标签的defaultSelectedKeys默认当前左侧边栏菜单所在位置*/
  const localRoutePath = [useLocation().pathname]   //defaultSelectedKeys接收一个数组,所有套上[]
  // console.log(localRoutePath);       //--> 当前所在路由

/* 设置Menu标签的onOpenChange这个API, 设置侧边栏选项展开收回的回调*/
  const [openKeys, setOpenKeys] = useState(['']);
  const openChangeHandler = (keys:string[]) => {
      // console.log(keys);             //--> keys返回一个数组, 记录了当前哪一项是展开的(MenuItem里的第二个参数)
        //把这个数组修改成最后一次点击的那个, 因为我要的是展开另一个栏目,之前的栏目就关闭
      setOpenKeys([keys[keys.length-1]])
  }

/* ----------------------------------------------业务代码--------------------------------------------*/

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                
              <Menu theme="dark" 
              // defaultSelectedKeys 默认当前菜单所在位置 , 接收一个数组形式
              defaultSelectedKeys={localRoutePath}
              mode="inline" items={items} 
              onClick={menuClick}
              // 某项菜单展开和回收的事件
              onOpenChange={openChangeHandler}
              // 当前菜单展开想的key数组
              openKeys={openKeys}
              />
      </Sider>
      
      {/* 右边 */}
      <Layout>
          {/* 顶部 */}
          <Header style={{ padding: 0, background: colorBgContainer }} >
              {/* 面包屑 */}
              <Breadcrumb style={{ margin: '16px 0', padding:' 0 16px'}}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
          </Header>
          {/* 中间内容 */}
          <Content style={{ margin: '16px 16px' }}>
            <div style={{ padding: 24, minHeight:700, background: colorBgContainer }}>
                  {/* outlet部分 */}
                  <Outlet />
            </div>
          </Content>
          {/* 底部 */}
          <Footer style={{ textAlign: 'center' }}>Project for React18</Footer>
      </Layout>
    </Layout>
  );
};

export default View;