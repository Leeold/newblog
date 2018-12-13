import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './browse_num.scss';
class browse extends Component{
    getOption(){
        return {
            title : {
                text: '个人博客浏览次数分析',
                subtext: '数据均来自mysql统计',
                x:'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['总浏览数','前端浏览数','后台浏览数']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    center: ['50%', '65%'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:300, name:'总浏览数'},
                        {value:200, name:'前端浏览数'},
                        {value:100, name:'后台浏览数'}
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <div className="echart_browse">
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

export default browse