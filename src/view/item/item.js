import React  from 'react';
import {Link,withRouter } from "react-router-dom";
import "./item.css"
import { Menu,Icon } from 'antd';
class Sider extends React.Component {

    constructor(arg){
        super(arg)
        let now =  this.getNow(this.props.location);
        // console.log(now)
        this.state = {
            current: now,
        }
    }
    getNow(location){
        let now = location.pathname.substring(1);
        return now;
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="main/list">
                    <Link to={"/main/list"}><Icon style={{ fontSize: 16 }} type="home" theme="twoTone" /><span>全部</span></Link>
                </Menu.Item>
                <Menu.Item key="main/java">
                    <Link to={"/main/java"}><Icon style={{ fontSize: 16 }} type="folder-open" theme="twoTone" /><span>后台</span></Link>
                </Menu.Item>
                <Menu.Item key="javascript">
                    <Link to={"/main/front"}><Icon style={{ fontSize: 16 }} type="folder-add" theme="twoTone" /><span>前端</span></Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to={"/main/about"}><Icon style={{ fontSize: 16 }} type="contacts" theme="twoTone" /><span>关于</span></Link>
                </Menu.Item>
                <Menu.Item key="editor">
                    <Link to={"/main/editor"}><Icon style={{ fontSize: 16 }} type="edit" theme="twoTone" /><span>编辑</span></Link>
                </Menu.Item>
            </Menu>
        );
    }
}
export default withRouter(Sider);
