import { wasm } from "./wasm"
import ReactDOM from 'react-dom'
import React from 'react'
import axios from "axios"



// import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { useState } from 'react';
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };
// }
// const items = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];
// const AppNav = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     return (
//         <Layout
//             style={{
//                 minHeight: '100vh',
//             }}
//         >
//             <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//                 <div
//                     style={{
//                         height: 32,
//                         margin: 16,
//                         background: 'rgba(255, 255, 255, 0.2)',
//                     }}
//                 />
//                 <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//             </Sider>

//             <Layout className="site-layout">
//                 <Header
//                     style={{
//                         padding: 0,
//                         background: colorBgContainer,

//                     }}
//                 />
//                 <Content
//                     style={{
//                         margin: '0 16px',
//                     }}
//                 >
//                     <Breadcrumb
//                         style={{
//                             margin: '16px 0',
//                         }}
//                     >
//                         <Breadcrumb.Item>User</Breadcrumb.Item>
//                         <Breadcrumb.Item>Bill</Breadcrumb.Item>
//                     </Breadcrumb>
//                     <div 
//                         style={{
//                             padding: 24,
//                             minHeight: 360,
//                             background: colorBgContainer,

//                         }}
//                     >
//                         Bill is a cat.
//                     </div>
//                 </Content>
//                 <Footer
//                     style={{
//                         textAlign: 'center',
//                     }}
//                 >
//                     xxxxxxxxxxxxxxxxxxxxxxxxxx
//                 </Footer>
//             </Layout>
//         </Layout>
//     );
// };
class App extends React.Component {


    state = {}

    requestUrls = () => {

        let param = { "name": "admin", "password": "1" };
        axios.post("/user/login", param).then(function (resp) {
            console.log("-----------------", resp);
        });
    }

    render() {
        return (<div>
            <button type="button" onClick={() => this.requestUrls()}>点击请求</button>
        </div>)
    }
}



ReactDOM.render(<App />, document.getElementById("root"));
