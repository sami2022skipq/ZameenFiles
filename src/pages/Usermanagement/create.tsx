import { Button, Card, Col, Form, Input, Row, Select, Spin } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { createUser, getuserById, updateUser } from '@/api/user.api';
import { NOTIFICATIONTYPE } from '@/interface/notifications';
import { IUserManagementsRoutes } from '@/routes/routin';
import { notificationCallback } from '@/stores/global.store';

const { Option } = Select;

const CreateUser = () => {
  const { id: routeid }: any = useParams();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [dob, setDob] = useState<any>();
  const dispatch = useDispatch();
  const { mutate: mutateUserSingup, isLoading: createLoading } = useMutation(createUser);
  const { mutate: mutateUpdate, isLoading: updateLoading } = useMutation(updateUser);

  const { data: dataById, isLoading } = useQuery(
    [`get-single-user-date-${routeid}`, routeid],
    ({ queryKey }) => getuserById(Number(queryKey[1])),
    {
      enabled: !!routeid,
    },
  );

  useEffect(() => {
    if (dataById?.data?.result) {
      const {
        full_name,
        email,
        address,

        dob,
        user_ethnicity,
        gender,
        mobile,
        username,
        cnic,
        phone_ext,
        payment_method,
        password,
        user_role,
        status,
        user_type,
        organization_name,
        contact_no,
      } = dataById?.data?.result;

      setDob(dob);
      const setFieldsValue = {
        full_name,
        email,
        address,

        mobile,
        username,
        user_ethnicity,
        gender,
        cnic,
        dob,
        user_type,
        phone_ext,
        payment_method,
        password,
        user_role,
        status,
        organization_name,
        contact_no,
      };

      form.setFieldsValue(setFieldsValue);
    }
  }, [form, dataById]);

  const onFinish = async (values: any) => {
    const payload = {
      ...values,
      dob: dob ? moment(dob).format('MM/DD/YYYY') : null,
    };

    const updateValues = {
      ...payload,
      id: routeid,
    };

    if (dataById?.data?.result) {
      try {
        await mutateUpdate(updateValues, {
          onSuccess: res => {
            navigate(`/${IUserManagementsRoutes.MANAGE}`);
            dispatch(
              notificationCallback({
                type: NOTIFICATIONTYPE.SUCCESS,
                info: `${res.data.message}`,
              }),
            );
            queryClient.invalidateQueries();
          },
        });
      } catch (error) {}
    } else {
      try {
        await mutateUserSingup(payload, {
          onSuccess: res => {
            navigate(`/${IUserManagementsRoutes.MANAGE}`);
            dispatch(
              notificationCallback({
                type: NOTIFICATIONTYPE.SUCCESS,
                info: `${res.data.message}`,
              }),
            );
            queryClient.invalidateQueries();
          },
        });
      } catch (error) {}
    }
  };

  return (
    <div>
      <Spin spinning={createLoading || updateLoading || isLoading}>
        <Card title={routeid ? 'Update New User' : 'Create New User'} bordered={false}>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
            <Row gutter={16}>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="organization_name" label="organization Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                  <Select>
                    <Option value={0}>Admin</Option>
                    <Option value={1}>Client</Option>
                    <Option value={2}>Authorizer</Option>
                    <Option value={3}>Security Guard</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="confirm_password" label="Confirm Password" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="city" label="City" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="status" label="Status">
                  <Select></Select>
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="contact_no" label="Phone Number" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8} sm={24} xs={24}>
                <Form.Item name="signature" label="signature" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={8} sm={24} xs={24}>
                <Form.Item name="Location" label="location" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>

              <Col md={24} sm={24} xs={24}>
                <Form.Item name="notes" label="Notes" rules={[{ required: true }]}>
                  <Input.TextArea cols={24} />
                </Form.Item>
              </Col>
            </Row>
            <div className="btn_add_cancel">
              <Button type="primary" htmlType="submit">
                Add
              </Button>
              <Button type="default">Cancel</Button>
            </div>
          </Form>
        </Card>
      </Spin>
    </div>
  );
};

export default CreateUser;
