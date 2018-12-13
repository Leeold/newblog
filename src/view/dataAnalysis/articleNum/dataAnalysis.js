import React, { Component } from 'react';
import './dataAnalysis.scss';
import ReactEcharts from 'echarts-for-react';
class dataAnalysis extends Component{

    getOption(){
        return{
            title : {
                text: '个人博客文章数量分析',
                subtext: '数据均来自mysql统计',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['总文章数','前端数量','后台数量']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:280, name:'总文章数'},
                        {value:200, name:'前端数量'},
                        {value:100, name:'后台数量'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    render(){
        return(
            <div className='echart_wrap'>
                <ReactEcharts
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{width: '100%',height:'100%'}}
                />
            </div>

        )
    }
}

export default dataAnalysis