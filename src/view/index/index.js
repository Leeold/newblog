 import { Carousel } from 'antd';
 import React, { Component } from 'react';
 import Login from "../login/login"
  import MainHeader from "../header/main-header";
  import MainFooter from "../main-footer";
 import "./index.scss";

 class Index extends Component{
     render(){
         return  <div className="pageWrap">
             <MainHeader/>
             <Login/>
             <Carousel effect="fade" autoplay="true" className="swiper">
                 <div className="slide swiper_first"></div>
                 <div className="slide swiper_second"></div>
                 <div className="slide swiper_three"></div>
             </Carousel>
             <MainFooter/>
         </div>
     }
 }

 export default Index;