import React, {Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Main from "../view/main/main";
import Index from "../view/index/index";
class RouterIndex extends Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/main/list" />
                )} />
                <Route exact path="/index" component={Index}/>
                <Route path="/main" component={Main}/>
            </Switch>
        );
    }
}
export default RouterIndex;