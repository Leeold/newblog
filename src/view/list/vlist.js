import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {List, Spin,Icon} from 'antd';
import {connect} from "react-redux";
import qs from 'qs';
import fmtDate from "../../utils/converseTime"
import './list.css';
import './vlist.scss'
import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";
const antIcon = <Icon type="sync" style={{ fontSize: 30 }} spin />;
class InfiniteListExample extends React.Component {
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
            this.props.dispatch((dispatch)=>{
                dispatch({
                    type:"LIST_UPDATA_SUCC",
                    data:res
                });

            });
        });
    }


    fetchData = (callback) => {
        this.setState({
            page: this.state.page+1,
        });
        let data={
             "page":this.state.page,
        };
        axios.post('/api/article/getAll',qs.stringify(data))
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
    };

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
                this.props.dispatch((dispatch)=>{
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:data
                    });

                });
            },1000)

        });
    };
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
    };
    render() {
        const {data} =this.props;
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
                        dataSource={data}
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


export default connect(state=>(state.list))(InfiniteListExample);