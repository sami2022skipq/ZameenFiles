import type { FC } from 'react';

import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Spin } from 'antd';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { createUser } from '@/api/user.api';
import { NOTIFICATIONTYPE } from '@/interface/notifications';
import { notificationCallback } from '@/stores/global.store';
import { handleErrorResponse } from '@/utils/helperfunctions';

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CreateAccount: FC<IProps> = ({ open, setOpen }) => {
  const mutateLogin = useMutation(createUser);

  const { mutate: mutateUserSignup, isLoading } = mutateLogin;
  const dispatch = useDispatch();
  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };

  const onFinished = async (form: any) => {
    try {
      await mutateUserSignup(form, {
        onSuccess: (res: any) => {
          dispatch(
            notificationCallback({
              type: NOTIFICATIONTYPE.SUCCESS,
              info: `Successfully sign up`,
            }),
          );
          setOpen(false);
        },
        onError: (error: any) => {
          handleErrorResponse(error, dispatch, notificationCallback);
        },
      });
    } catch (error) {
      console.log(error, 'errr');
    }
  };

  return (
    <Modal width={800} footer={null} open={open} onCancel={() => setOpen(false)}>
      <Spin spinning={isLoading}>
        <Form layout="vertical" autoComplete="off" onFinish={onFinished}>
          <Row gutter={[16, 0]}>
            <Col md={12}>
              <Row>
                <Col md={24}>
                  <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[{ required: true }, { type: 'string', min: 11 }]}
                  >
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>
                <Col md={24}>
                  <Form.Item name="email" label="Email" rules={[{ required: true }, { type: 'email' }]}>
                    <Input placeholder="input placeholder" autoComplete="new-password" />
                  </Form.Item>
                </Col>

                <Col md={24}>
                  <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password placeholder="input placeholder" autoComplete="new-password" />
                  </Form.Item>
                </Col>

                <Col md={16}>
                  <Form.Item name="dob" label="DOB" {...config}>
                    <DatePicker className="full-width" />
                  </Form.Item>
                </Col>

                <Col md={7} className="ml-5">
                  <Form.Item name="gender" label="Gender">
                    <Select placeholder="Please Select">
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Fe Male</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col md={12}>
              <Row>
                <Col md={24}>
                  <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>

                <Col md={24}>
                  <>
                    <Button htmlType="submit" className="btn_signup">
                      Sign up
                    </Button>
                    <span className="mt-10">
                      By clicking “SIGN UP”, I agree to Your Terms of Use and Privacy Policy
                    </span>
                  </>
                </Col>
                <Col md={24}>
                  <span className="full-width flex justifyCenter">OR</span>
                  <Button className="btn_google_signin">
                    <GooglePlusOutlined style={{ fontSize: '18px', fontWeight: 'bolder' }} />
                    <span className="ml-10 mb-5" style={{ fontSize: '16px', fontWeight: 'bolder' }}>
                      {' '}
                      Continue With Google
                    </span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Spin>
    </Modal>
  );
};

export default CreateAccount;
