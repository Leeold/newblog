
 import React, { Component } from 'react';
import SubCounter from "./SubCounter";
import GetSnapShotBeforeUpdate from "./getSnapShotBeforeUpdate";
 import "./index.scss";
 class Index extends Component{
     state = {
         age: 666
     };

     add = () => {
         console.log("方法点击");
         this.setState({ age: this.state.age + 1 });
     };

     componentWillMount() {
         console.log("父组件将要挂载");
     }
     componentDidMount() {
         console.log("父组件已挂载");
         document.getElementById('btn').addEventListener('click',function () {

             console.log("监听点击");

         })
     }

     render() {
         console.log("父组件render");
         return (
             <div>
                  <div id="btn" onClick={this.add}>+</div>
                  <SubCounter age={this.state.age} />
                  {/*<GetSnapShotBeforeUpdate age={this.state.age}/>*/}
             </div>
         );
     }


 }
 export default Index;