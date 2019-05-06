import React, { Component } from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Bundle from '../../utils/bundle';
import MainHeader from "../header/main-header";
import "../index.css";
 //路由按需加载
const List = (props) => (
    <Bundle load={() => import('../list/vlist')}>
        {(List) => <List {...props}/>}
    </Bundle>
)
const SearchList = (props) => (
    <Bundle load={() => import('../list/searchList')}>
        {(List) => <List {...props}/>}
    </Bundle>
)
const Java = (props) => (
    <Bundle load={() => import('../java/java')}>
        {(Java) => <Java {...props}/>}
    </Bundle>
);
const Front = (props) => (
    <Bundle load={() => import('../front/front')}>
        {(Front) => <Front {...props}/>}
    </Bundle>
);
const Detail = (props) => (
    <Bundle load={() => import('../details/detail')}>
        {(Detail) => <Detail {...props}/>}
    </Bundle>
);
const Editor = (props) => (
    <Bundle load={() => import('../editor/editor')}>
        {(Editor) => <Editor {...props}/>}
    </Bundle>
);
const About = (props) => (
    <Bundle load={() => import('../about/about')}>
        {(About) => <About {...props}/>}
    </Bundle>
);
class main extends Component{
    render(){

        return  <div className="box">
            <MainHeader/>
            <main className="main">
                <div className="main_right">
                    <Switch>
                        <Route path="/" exact render={()=>(
                            <Redirect to="/main/list" />
                        )} />
                        <Route path="/main/list" component={List}/>
                        <Route path="/main/searchList" component={SearchList}/>
                        <Route path="/main/java" component={Java}/>
                        <Route path="/main/front" component={Front}/>
                        <Route path="/main/detail/:id" component={Detail}/>
                        <Route path="/main/editor" component={Editor}/>
                        <Route path="/main/about" component={About}/>
                    </Switch>
                </div>
            </main>
        </div>
    }
}

export default main;