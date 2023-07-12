import './index.less';

import { Button, Card, Form, Input, message, Spin } from 'antd';
import { useMutation } from 'react-query';

import { requestResetPassword } from '@/api/user.api';

const ForgetPassword = () => {
  const mutateLogin = useMutation(requestResetPassword);

  const { mutate: mutateRequest, isLoading } = mutateLogin;

  const OnFinsish = async (value: any) => {
    try {
      await mutateRequest(value, {
        onSuccess: res => {
          message.success('Please check your email');
        },
        onError: error => {
          message.error('Invalid Email');
        },
      });
    } catch (error) {}
  };

  return (
    <div className="login-page">
      <Card>
        <Spin spinning={isLoading}>
          <Form className="login-page-form" onFinish={OnFinsish}>
            <h2>Real Estate</h2>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter email',
                },
              ]}
            >
              <Input placeholder="Please Enter Your Email" />
            </Form.Item>
            <Button htmlType="submit" type="primary" className="login-page-form_button">
              Forget Password
            </Button>
          </Form>
        </Spin>
      </Card>
    </div>
  );
};

export default ForgetPassword;
