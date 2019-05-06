import React, {Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Main from "../view/main/main";
import Index from "../view/index/index";
import Demo from "../view/demo/demo";
class RouterIndex extends Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/main/list" />
                )} />
                <Route exact path="/index" component={Index}/>
                <Route path="/main" component={Main}/>
                <Route path="/demo" component={Demo} />
            </Switch>
        );
    }
}
export default RouterIndex;