import React,{Component} from "react";
import {connect} from "react-redux";
import { Input,message } from 'antd';
import PropTypes from 'prop-types'
import qs from 'qs';
import axios from "axios";
const Search = Input.Search;
const error = (value) => {
    message.error(value);
};
class search extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    search(value){
        if(value === null || value ===""){
            error('请输入搜索内容!');
            return;
        }
        let data = {
            "title":value
        }
        axios.post('/api/article/getByTitle',qs.stringify(data))
            .then((res)=>{
            if(res.data.data.length === 0){
                error('暂无搜索内容!');
                return;
            }
                this.props.dispatch((dispatch)=>{
                    // console.log(res);
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:res.data.data
                    });

                    this.context.router.history.push('/main/searchList');
                });
            }).catch((error)=>{
                console.log(error);
            })
    }
    render(){
        return(
            <Search
                placeholder="请输入搜索内容"
                enterButton="Search"
                onSearch={(value=>{
                    this.search(value);
                })}
            />
        )
    }
}
export default connect(state=>(state))(search);