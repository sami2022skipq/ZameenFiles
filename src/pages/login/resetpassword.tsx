import './index.less';

import { Button, Card, Form, Input, message, Spin } from 'antd';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';

import { resetPassword } from '@/api/user.api';

const ResetPassword = () => {
  const mutateLogin = useMutation(resetPassword);
  const { mutate: mutateRequest, isLoading } = mutateLogin;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const id = searchParams.get('id');

  const OnFinsish = async (value: any) => {
    const submitValues = {
      ...value,
      token: token,
      userId: id,
    };

    try {
      await mutateRequest(submitValues, {
        onSuccess: res => {
          message.success('Successfully Reset Password');
        },
        onError: error => {
          message.error('Some thing went wrong');
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
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter password',
                },
              ]}
            >
              <Input.Password placeholder="Please Enter Your New Password" />
            </Form.Item>
            <Button htmlType="submit" type="primary" className="login-page-form_button">
              Reset Password
            </Button>
          </Form>
        </Spin>
      </Card>
    </div>
  );
};

export default ResetPassword;
