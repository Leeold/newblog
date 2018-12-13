import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {List,Spin,Icon } from "antd";
import axios from "axios";
import qs from 'qs';
import fmtDate from "../../utils/converseTime";
import './list.css';
import './vlist.scss';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class ListIndex extends Component{
    addBrowse(id,clickNum){
        let data ={
            "id":id,
            "clickNum":clickNum
        };
        axios.post('/api/article/browse',qs.stringify(data))
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    render(){
         const {data,loading} = this.props;
        return(
            <div className="section">
                <Spin spinning={loading} indicator={antIcon} />
                <List
                    dataSource={data}
                    split={false}
                    renderItem={item => (<List.Item>
                        <article className="listWrap">
                            <div className="user_name">
                                <Icon type="contacts" theme="twoTone" twoToneColor="#eb2f96" /> 作者 发布于 {fmtDate(item.createDate)} &nbsp;&nbsp;&nbsp;
                                <Icon type="tag" theme="twoTone" />&nbsp;{item.type ===1 ? "后台" : "前端"}&nbsp;&nbsp;&nbsp;
                                <Icon type="eye" theme="twoTone" /> 浏览次数：{item.clickNum}
                            </div>
                            <h1 onClick={this.addBrowse.bind(this,item.id,item.clickNum)}><Link to={"/main/detail/"+item.id}>{item.title}</Link></h1>
                            <div className="list_content">
                                <p>{item.description}</p>
                            </div>
                            <p className="read" onClick={this.addBrowse.bind(this,item.id,item.clickNum)}><Link to={"/main/detail/"+item.id}>继续阅读</Link></p>
                        </article>
                    </List.Item>)}
                >

                </List>
            </div>

        )
    }
}
export default connect(state=>(state.list))(ListIndex)