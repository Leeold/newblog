import React,{Component} from "react";
import {Layout} from "antd";

export default class MainFooter extends Component {
    render(){
        return <Layout.Footer style={{
            textAlign:"center",
            position:"absolute",
            left:"0",
            bottom:"0",
            width:"100%",
            background:"rgba(55, 61, 66, 1)",
            color:"white"
        }}>
            京ICP备08102442号-1 2007-2018 LAOLI.COM 版权所有
        </Layout.Footer>;
    }
}