

import React from 'react';
import PropTypes from "prop-types";
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import axios from "axios";
import qs from 'qs';
import "./login.scss"
const FormItem = Form.Item;
const error = (mes) => {
    message.error(mes);
};
class NormalLoginForm extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                let data = {
                    "username":values.userName,
                    "password":values.password
                }
                axios.post('/api/user/login',qs.stringify(data))
                    .then((res)=>{
                        if(res.data.code === 200){
                            if(res.data.data === null){
                                error("此账号不存在！");
                            }else if(res.data.data.password !== data.password){
                                error("密码不正确！");
                            }else{
                                this.context.router.history.push('/main/list');
                            }

                        }
                    }).catch((error)=>{
                        console.log(error);
                    })

            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入你的账号!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button  type="primary" htmlType="submit" className="login-form-button">
                       Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

export default (Form.create()(NormalLoginForm));