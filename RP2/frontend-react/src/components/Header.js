import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


function Header(props){
    const {Header} = Layout;
    return(
        <Layout className="layout">
          <Header className="header" style={{position: "sticky", top: "0"}}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item><Link to="/">Home</Link></Menu.Item>
              <Menu.Item><Link to="/post">Posts</Link></Menu.Item>
              <Menu.Item><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item><Link to="/register">Register</Link></Menu.Item>
              {props.user ?
              <Menu.Item>Logged in as: { props.user.firstName }</Menu.Item> :
              <Menu.Item>Not logged in</Menu.Item>}
            </Menu>
          </Header>
        </Layout>
      );
}



export default Header;