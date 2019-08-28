
 import React, { useEffect } from 'react';
 import "./index.scss";
 import {cloneDeep} from 'lodash';
 function Index() {
     useEffect(() =>{
        console.log(document.documentElement.getBoundingClientRect().width);
     })
     let divStyle = {
        width:'2.66rem',
        height:'2.66rem',
        background:'red'
     }
     return (
         <React.Fragment>
             <div style={divStyle}>
                 首页
             </div>

         </React.Fragment>
     );
 }

 export default Index;