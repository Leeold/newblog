import React, { Component } from 'react';
class SubCounter extends Component{
    state = {
        num: 888
    };
    // 根据新的属性对象派生状态对象
    // nextProps——新的属性对象 prevState——旧的状态对象
    static getDerivedStateFromProps(nextprops, state) {
        console.log('props',nextprops);
        console.log('state',state);
        // 返回一个对象来更新 state 或者返回 null 来表示接收到的 props 不需要更新 state
        if (nextprops.age !== state.age) {
            console.log("更新吧");
            return {
                age: nextprops.age,
                // 注意：这里不需要把组件自身的状态也放进来
                // num:state.num
            };
        }
        return null;
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldComponentUpdate',nextProps);
    //     console.log('shouldComponentUpdate',nextState);
    //     return false;
    // }

    render() {
        return (
            <>
                 <h1>{this.state.age}</h1>
            </>
        );
    }
}

export default SubCounter;
