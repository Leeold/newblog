import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {List,Spin,Icon } from "antd";
import axios from "axios";
import './front.scss'
import fmtDate from "../../utils/converseTime"
import InfiniteScroll from 'react-infinite-scroller';
import qs from "qs";
const antIcon = <Icon type="sync" style={{ fontSize: 30 }} spin />;
class front extends Component{
    constructor(arg){
        super(arg)
        this.state={
            data: [],
            loading: false,
            topLoading:true,
            hasMore: true,
            totalSize:null,
            page:0
        }
    }
    componentDidMount(){
        this.fetchData((res) => {
            console.log(res);
            this.setState({
                data: res,
            });
        });
    }
    fetchData = (callback) => {
        this.setState({
            page: this.state.page+1,
        });
        let data={
            "page":this.state.page,
            "type":2
        };
        axios.post('/api/article/back/list',qs.stringify(data))
            .then((res)=>{
                console.log(res);
                this.setState({
                    topLoading: false,
                    totalSize:res.data.data.total
                });
                callback(res.data.data.list);
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length >= this.state.totalSize) {
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData((res) => {
            data = data.concat(res);
            console.log(data);
            setTimeout(()=>{
                this.setState({
                    data,
                    loading: false,
                });
            },1000)

        });
    }
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
    render() {
        return (
            <div className="demo-infinite-container">
                <Spin className="top_loading" spinning={this.state.topLoading} indicator={antIcon} />
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >

                    <List
                        dataSource={this.state.data}
                        split={false}
                        locale={{emptyText:""}}
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
                        {this.state.loading && this.state.hasMore && (
                            <div className="demo-loading-container">
                                <Spin indicator={antIcon} />
                            </div>
                        )}

                    </List>
                </InfiniteScroll>
            </div>
        );
    }
}
export default connect(state=>(state.front))(front);