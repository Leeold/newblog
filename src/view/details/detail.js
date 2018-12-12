import React from "react";
import {connect} from "react-redux";
import "./detail.scss"
import axios from "axios/index";
import qs from 'qs';
class detail extends React.Component{
    constructor(arg){
        super(arg);
        this.state={
            data:null
        }
    }
    componentDidMount(){
        this.fetchData((res)=>{
            console.log(res);
            this.setState({data:res.data.data.content})
        })

    }
    fetchData = (callback)=>{
        let id= this.props.match.params.id;
        let data = {
            "id":id
        }
        axios.post('/api/article/detail',qs.stringify(data))
            .then((res)=>{
                callback(res);
            })
            .catch((error)=>{
                console.log(error);
            })
    }


    render(){
        let {data} = this.state;
        return (<div className="detail_wrap" dangerouslySetInnerHTML = {{ __html:data }}></div>)
    }
}

export default connect(state=>(state))(detail);