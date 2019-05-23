import React, { Component } from 'react';
import "./aboutItem.scss"
class aboutItem extends Component{
    constructor(arg){
        super(arg)
        this.state={
            data:["java","spring","springmvc","springboot","javascript","html","css","react","vue","webpack"]
        }
    }
    render(){
        const {data} = this.state;

        return( <div className="aboutItem_wrap">
                {
                    data.map((item,i)=>{
                        return (
                            <span className="style_span" href="" key={i}>{item}</span>
                            )

                    })
                }
               </div>

        )
    }
}

export default aboutItem