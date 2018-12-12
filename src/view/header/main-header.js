import React,{Component} from "react";
import "./header.css";
import userPhoto from "./img/user_default.jpg"
import Item from "../item/item";
import Search from "../search/search";

export default class MainHeader extends Component {
    render(){
        return (
            <div className="header">
                <div className="header_left">
                    <img className="photo" src={userPhoto} alt=""/>
                </div>
                <div className="header_center">
                    <p>前端</p>
                    <p>专注前端开发</p>
                </div>
                <Item/>
                <Search/>
            </div>);
    }
}