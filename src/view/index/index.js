
 import React, { Component } from 'react';
import SubCounter from "./SubCounter";
import GetSnapShotBeforeUpdate from "./getSnapShotBeforeUpdate";
 import "./index.scss";
 class Index extends Component{
     state = {
         age: 666
     };

     add = () => {
         this.setState({ age: this.state.age + 1 });
     };

     render() {
         return (
             <div>
                  <div onClick={this.add}>+</div>
                  <SubCounter age={this.state.age} />
                  {/*<GetSnapShotBeforeUpdate age={this.state.age}/>*/}
             </div>
         );
     }

 }
 export default Index;