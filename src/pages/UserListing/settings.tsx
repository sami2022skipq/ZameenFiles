import './style.less';

import { MailOutlined, MobileOutlined, PhoneOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Checkbox, Col, Divider, Form, Input, message, Row, Select, Tabs, Upload } from 'antd';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import { resetPassword } from '@/api/user.api';
import Avator from '@/assets/header/avator.jpeg';

const { Option } = Select;

const UserSettings = () => {
  const mutateChangePassowrd = useMutation(resetPassword);
  const { mutate: mutateRequest, isLoading } = mutateChangePassowrd;
  const userDetails = useSelector(state => state?.user?.userDetails);
  const [form] = Form.useForm();

  useEffect(() => {
    if (userDetails) {
      const { name, email, mobile, landline, whatsApp, address, country, city } = userDetails;

      const setFieldsValue = {
        name,
        email,
        mobile,
        landline,
        whatsApp,
        address,
        country,
        city,
      };

      form.setFieldsValue(setFieldsValue);
    }
  }, [form, userDetails]);
  const cities = [
    'Karachi',
    'Lahore',
    'Faisalabad',
    'Rawalpindi',
    'Multan',
    'Gujranwala',
    'Peshawar',
    'Abbottabad',
    'Islamabad',
    'Quetta',
    'Hyderabad',
    'Sialkot',
    'Gujrat',
    'Bahawalpur',
    'Sargodha',
    'Sukkur',
    'Jhang',
    'Sheikhupura',
    'Larkana',
    'Rahim Yar Khan',
    'Kohat',
    'Dera Ghazi Khan',
    'Mardan',
    'Kasur',
    'Mingora',
  ];

  const OnFinsish = async (value: any) => {
    const submitValues = {
      ...value,

      userId: userDetails?._id,
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
    <div>
      <Card loading={isLoading}>
        <Tabs tabPosition="left" type="card" style={{ minHeight: '75vh' }}>
          <Tabs.TabPane tab="Profile" key={1}>
            <Row>
              <Col md={1}>
                <Avatar src={<img src={Avator} alt="avatar" />} size="large" />{' '}
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={24}>
                    <span style={{ fontWeight: 'bolder', fontSize: '15px' }}>{userDetails?.name}</span>
                  </Col>
                  <Col md={24}>
                    <span>{userDetails?.email}</span>
                  </Col>
                </Row>
              </Col>
              <Divider />
              <Col md={3}></Col>
              <Col md={16}>
                <Card className="main_card_auth">
                  <Form layout="vertical" form={form}>
                    <Row gutter={[16, 16]}>
                      <Col md={12}>
                        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                          <Input size="large" prefix={<UserOutlined />} />
                        </Form.Item>
                      </Col>

                      <Col md={12}>
                        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                          <Input size="large" disabled prefix={<MailOutlined />} />
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                          <Input size="large" prefix={<MobileOutlined />} />
                        </Form.Item>
                      </Col>

                      <Col md={12}>
                        <Form.Item name="landline" label="Land Line" rules={[{ required: true }]}>
                          <Input size="large" prefix={<PhoneOutlined />} />
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item name="whatsApp" label="WhatsApp" rules={[{ required: true }]}>
                          <Input size="large" prefix={<MobileOutlined />} />
                        </Form.Item>
                      </Col>
                      <Col md={24}>
                        <Form.Item name="address" label="AAddress" rules={[{ required: true }]}>
                          <Input.TextArea />
                        </Form.Item>
                      </Col>

                      <Col md={12}>
                        <Form.Item name="country" label="Country">
                          <Select placeholder="Please Select" size="large">
                            <Option value="pakistan">Pakistan</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col md={12}>
                        <Form.Item name="city" label="City">
                          <Select placeholder="Please Select" allowClear size="large">
                            {cities?.map(item => {
                              return <Option value={item}>{item}</Option>;
                            })}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col md={24}>
                        <Upload
                          name="avatar"
                          listType="picture-card"
                          className="avatar-uploader"
                          showUploadList={false}
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          // beforeUpload={beforeUpload}
                          // onChange={handleChange}
                        >
                          <PlusOutlined />
                        </Upload>
                      </Col>
                      <Col md={12}>
                        <Checkbox>Update details in all property listings</Checkbox>
                      </Col>

                      <Col md={24}>
                        <Button
                          style={{
                            fontWeight: 'bolder',
                            width: '230px',
                            height: '42px',
                            borderRadius: '12px !important',
                            background: '#44ee2c',
                            color: '#fff',
                          }}
                        >
                          Save Changes
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Change Password" key={2}>
            <div className="flex justifyCenter alignCenter" style={{ height: '35vh' }}>
              <Card title="Change Password" style={{ marginTop: '300px' }} className="main_card_auth">
                <Form layout="vertical">
                  <Row style={{ width: '500px' }}>
                    <Col md={24}>
                      <Form.Item name="old_password" label="Old Password">
                        <Input.Password size="large" placeholder="Please Enter..." />
                      </Form.Item>
                    </Col>

                    <Col md={24}>
                      <Form.Item name="new_password" label="New Password">
                        <Input.Password size="large" placeholder="Please Enter..." />
                      </Form.Item>
                    </Col>
                    <Col md={24}>
                      <Button
                        style={{
                          fontWeight: 'bolder',
                          width: '230px',
                          height: '42px',
                          borderRadius: '12px !important',
                          background: '#44ee2c',
                          color: '#fff',
                          display: 'block',
                        }}
                        className="full-width"
                      >
                        Save Changes
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default UserSettings;
