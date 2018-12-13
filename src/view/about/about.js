import React, { Component } from 'react';
import "./about.scss";
import AboutItem from "./aboutItem";
import ArticleAnalysis from '../dataAnalysis/articleNum/dataAnalysis';
import BrowseAnalysis from '../dataAnalysis/browseNum/browse_num';
class about extends Component{
    render(){
        return(
            <div className="about_wrap">
               <h2>自我介绍：</h2>
                <div className="about_content">
                    技术爱好者，业余爱好就是写写博客。<br/>
                </div>
                <h2>技能树：</h2>
                <AboutItem/>
                <h2>数据统计：</h2>
                <div className='data_analysis'>
                    <ArticleAnalysis/>
                    <BrowseAnalysis/>
                </div>

            </div>
        )
    }
}

export default about