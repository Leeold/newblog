import React, { Component } from 'react';
class GetSnapShotBeforeUpdate extends Component{
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = { messages: [] };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                messages: ["msg:" + this.state.messages.length, ...this.state.messages]
            });
            //this.setState({messages:[...this.state.messages,this.state.messages.length]});
        }, 1000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        return this.wrapper.current.scrollHeight;
    }

    // getSnapshotBeforeUpdate() {
    //     // 返回更新内容的高度 300px
    //     return this.wrapper.current.scrollHeight;
    // }
    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
        console.log(prevScrollHeight);
        this.wrapper.current.scrollTop =
            this.wrapper.current.scrollTop +
            (this.wrapper.current.scrollHeight - prevScrollHeight);
    }
    render() {
        let style = {
            height: "100px",
            width: "200px",
            border: "1px solid red",
            overflow: "auto"
        };
        return (
            <ul style={style} ref={this.wrapper}>
                {this.state.messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        );
    }
}

export default GetSnapShotBeforeUpdate;