
import React from "react";
import { Radio,Input,DatePicker,Form,Button,message } from 'antd';
import axios from "axios";
import "./editor.scss";
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
var qs = require('qs');
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const success = () => {
    message.success('编辑文章成功！');
};

class editor extends React.Component{
    handleSubmit = (event) => {

        event.preventDefault()

        this.props.form.validateFields((error, values) => {
            if (!error) {
                if(values.type ===1){
                    const submitData = {
                        "objectId":1,
                        "type":values.type,
                        "createDate": values.date.format('YYYY/MM/DD'),
                        "title": values.title,
                        "description": values.description,
                        "content": values.content.toHTML() // or values.content.toHTML()
                    }
                    axios.post('/api/article/add',qs.stringify(submitData),{headers: {
                        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                    }}).then((res)=>{
                        console.log(res);
                        if(res.data.code ===200){
                            success();
                        }else{
                            error();
                        };
                    }).catch((error)=>{
                            console.log(error);
                            error();
                        })
                }else{
                    const submitData = {
                        "objectId":1,
                        "type":values.type,
                        "createDate": values.date.format('YYYY/MM/DD'),
                        "title": values.title,
                        "description": values.description,
                        "content": values.content.toHTML() // or values.content.toHTML()
                    }
                    axios.post('/api/article/add',qs.stringify(submitData),{
                        headers: {
                            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    }).then((res)=>{
                        console.log(res);
                        if(res.data.code ===200){
                            success();
                        }else{
                            error();
                        };
                    })
                        .catch((error)=>{
                            console.log(error);
                        })
                }


            }
        })

    }
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 2 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 20 },
                // sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: '请选择时间!' }],
        };
        return (
            <div className="editor_wrap">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="选择类别">
                        {getFieldDecorator('type', {
                            rules: [{
                                required: true,
                                message: '选择类别',
                            }],
                            initialValue: 1,
                        })(
                        <RadioGroup>
                            <Radio value={1}>后台</Radio>
                            <Radio value={2}>前端</Radio>
                        </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="创建日期">
                        {getFieldDecorator('date', config)(
                            <DatePicker/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="文章标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题',
                            }],
                        })(
                            <Input size="default" placeholder="请输入标题"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="文章描述">
                        {getFieldDecorator('description', {
                            rules: [{
                                required: true,
                                message: '请输入描述',
                            }],
                        })(
                            <TextArea placeholder="请输入描述"  rows={4} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="正文内容">
                        {getFieldDecorator('content', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                required: true,
                                validator: (_, value, callback) => {
                                    if (value.isEmpty()) {
                                        callback('请输入正文内容')
                                    } else {
                                        callback()
                                    }
                                }
                            }],
                        })(
                        <BraftEditor className="my-editor"
                            placeholder="请输入正文内容"
                            contentStyle={{height: 300,width:890}}
                        />

                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="提交">
                        <Button size="large" type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </div>
        )

    }
}
 export default Form.create()(editor)