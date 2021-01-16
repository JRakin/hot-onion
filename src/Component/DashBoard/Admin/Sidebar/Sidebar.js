import { Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import {
  AuditOutlined,
  FileSearchOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

const Sidebar = ({ handleClick }) => {
  return (
    <>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        // inlineCollapsed={this.state.collapsed}
      >
        <Menu.Item
          className="d-flex align-items-center"
          key="1"
          icon={<PlusCircleOutlined />}
        >
          Add Food
        </Menu.Item>
        <Menu.Item
          className="d-flex align-items-center"
          key="2"
          icon={<FileSearchOutlined />}
        >
          All Food
        </Menu.Item>
        <Menu.Item
          className="d-flex align-items-center"
          key="3"
          icon={<AuditOutlined />}
        >
          All User
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
