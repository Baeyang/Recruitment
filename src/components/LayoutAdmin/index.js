import { Outlet, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button, Layout,Menu } from "antd"
import { useState } from "react";
import {UserOutlined,ContainerOutlined} from '@ant-design/icons';
import './LayoutAdmin.css'
const { Sider, Content } = Layout
function LayoutAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()
    const items = [
        {
            key: "/admin",
            label: 'Dashboard',
        },
        {
            key: "/company",
            label: 'Thông tin công ty',
        },
        {
            key: "/jobmanage",
            label: 'Quản lý công việc',
        }
    ]
    return (
        <>
            <Layout>
                <div className="LayoutDefault__header">
                    <div className="container">
                        <div className="LayoutDefault__header-inner">
                            {/* <div className={"LayoutDefault__logo" + (collapsed && "LayoutDefault__logo--fold")}> */}
                            <div className="LayoutDefault__logo">
                                <Link to='/admin'> 
                                    IT JOBS
                                </Link>
                            </div>
                            <div className="LayoutDefault__icon">
                                <Link to='logout'>
                                    <Button>  Đăng xuất </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Layout className="Layout-Admin__main">
                    <Sider
                        collapsed={collapsed}
                        breakpoint='lg'
                        collapsible
                        className='Layout-Admin__sider'
                        theme='light'
                        width={230}
                        onBreakpoint={(e) => setCollapsed(e)}
                    >
                        <Menu items={[
                            {   
                                key: "/dashboard",
                                icon: <UserOutlined />,
                                label: <Link to='/admin' >Tổng quát</Link>,
                            },
                            {
                                key: "/company",
                                icon: <ContainerOutlined />,
                                label: <Link to='/infoCompany' >Thông tin Công ty</Link>,
                            },
                            {
                                key: "/jobmanage",
                                icon: <ContainerOutlined />,
                                label: <Link to='/jobmanage' >Quản lý công việc</Link>,
                            }
                            ,
                            {
                                key: "/cvManage",
                                icon: <ContainerOutlined />,
                                label: <Link to='/cvManage' >Quản lý Hồ sơ</Link>,
                            }
                        ]} mode="inline" defaultOpenKeys={["/dashboard"]} defaultSelectedKeys={[location.pathname]}>
                        </Menu>
                    </Sider>
                    <Content className="Layout-Admin__content">
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>

        </>
    )
}
export default LayoutAdmin