import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import './index.less';
import { newArticle } from '@/services/api';
import Editor from '@/components/Editor';

const { Option } = Select;

// async function submitForm() {
//   const { data } = await newArticle({});
//   console.log(data);
// }

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

function Todo() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const { code, msg } = await newArticle({
      ...values,
      introduction: values.title,
      images: 'www.baidu.com,www.qq.com',
    });
    if (!code) {
      form.resetFields();
      return message.success(msg);
    }
    return message.error(msg);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const onReset = () => {
  //   form.resetFields();
  // };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input your title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Select Type!' }]}>
          <Select allowClear>
            <Option value={1}>前端</Option>
            <Option value={2}>NodeJS</Option>
            <Option value={0}>Others</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tags" name="tags" rules={[{ required: true, message: 'Please input your tags!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please input your content!' }]}>
          <Editor />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Todo;
