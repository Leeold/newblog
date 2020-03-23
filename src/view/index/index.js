
 import React, { useEffect } from 'react';
 import "./index.scss";
 import {difference} from 'lodash';
 function Index() {
     useEffect(() =>{
        console.log(difference([3, 2, 1], [4, 2]));
     })
     let divStyle = {
        width:'2.66rem',
        height:'2.66rem',
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