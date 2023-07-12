import { CarryOutFilled, HomeFilled, TagsFilled } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Form, Input, InputNumber, Row, Select, Space, Spin, Switch } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { createAdd, getSingleNotes, updateAdd } from '@/api/listsing';
import Propertyimg from '@/assets/logo/ad.png';
import { NOTIFICATIONTYPE } from '@/interface/notifications';
import { IUserManagementsRoutes } from '@/routes/routin';
import { notificationCallback } from '@/stores/global.store';
import { handleErrorResponse } from '@/utils/helperfunctions';

const { Option } = Select;

const CreateAd = () => {
  const { id: routeid }: any = useParams();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [dob, setDob] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { mutate: mutateUserSingup, isLoading: createLoading } = useMutation(createAdd);
  const { mutate: mutateUpdate, isLoading: updateLoading } = useMutation(updateAdd);

  const { data: dataById, isLoading } = useQuery(
    [`get-single-user-single-note-${routeid}`, routeid],
    ({ queryKey }) => getSingleNotes(String(queryKey[1])),
    {
      enabled: !!routeid,
    },
  );

  useEffect(() => {
    if (dataById?.data) {
      const {
        societyName,
        totalPrice,
        balloted,
        area,
        downPayment,
        location,
        paidInstallments,

        plotNumber,
        email,
        discription,
        yearOfPurchase,
      } = dataById?.data;

      setDob(dob);
      const setFieldsValue = {
        societyName,
        totalPrice,
        area,
        downPayment,
        location,
        paidInstallments,
        balloted,
        plotNumber,
        email,
        discription,

        yearOfPurchase,
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

    if (routeid) {
      try {
        await mutateUpdate(updateValues, {
          onSuccess: res => {
            navigate(`/${IUserManagementsRoutes.MANAGE}`);
            dispatch(
              notificationCallback({
                type: NOTIFICATIONTYPE.SUCCESS,
                info: `Updated Successfully`,
              }),
            );
            queryClient.invalidateQueries();
          },
          onError: (error: any) => {
            handleErrorResponse(error, dispatch, notificationCallback);
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
                info: `Created Successfully`,
              }),
            );
            queryClient.invalidateQueries();
          },
          onError: (error: any) => {
            handleErrorResponse(error, dispatch, notificationCallback);
          },
        });
      } catch (error) {}
    }
  };

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

  return (
    <div>
      <div className="full-width mt-20">
        <img src={Propertyimg} height={192} className="full-width" />
      </div>
      <Spin spinning={createLoading || updateLoading || isLoading}>
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
          <Row>
            <Col md={3}></Col>
            <Col md={18}>
              <Card className="mt-10">
                <Row align="middle">
                  <Col xs={24} md={6}>
                    <Row justify="center" align="middle">
                      <Col md={24}>
                        <Avatar shape="square" size={64} icon={<HomeFilled />} />
                      </Col>
                      <Col md={24}>
                        <h1>Location</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} md={18}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={18}>
                        <Form.Item name="city" label="City">
                          <Select size="large">
                            {cities?.map(item => {
                              return <Option value={item}>{item}</Option>;
                            })}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item name="location" label="Location" rules={[{ required: true }]}>
                          <Input className="full-width" size="large" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>

              <Card className="mt-10">
                <Row align="middle">
                  <Col xs={24} md={6}>
                    <Row justify="center" align="middle">
                      <Col md={24}>
                        <Avatar shape="square" size={64} icon={<TagsFilled />} />
                      </Col>
                      <Col md={24}>
                        <h1>Price and Area</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} md={18}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={18}>
                        {/* <Form.Item label="Area" noStyle>
                          <Row gutter={8}>
                            <Col flex="70%">
                              <Form.Item name={['address', 'size']}>
                                <Input placeholder="Please enter" className="full-width" size="large" />
                              </Form.Item>
                            </Col>
                            <Col flex="30%">
                              <Form.Item name={['address', 'area']} noStyle>
                                <Select size="large" placeholder="Please Select">
                                  <Option value="Marla">Marla</Option>
                                  <Option value="Kanal">Kanal</Option>
                                  <Option value="Sq.Ft">Sq.Ft</Option>
                                  <Option value="Sq-M">Sq-M</Option>
                                  <Option value="Sq-Y">Sq-Y</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form.Item> */}
                        <Form.Item label="Area">
                          <Row gutter={8}>
                            <Col flex="70%">
                              <Form.Item name="area" noStyle>
                                <InputNumber placeholder="Please enter" className="full-width" size="large" />
                              </Form.Item>
                            </Col>
                            <Col flex="30%">
                              <Form.Item name={['price', 'size']} noStyle>
                                <Select size="large" placeholder="Please Select">
                                  <Option value="Marla">Marla</Option>
                                  <Option value="Kanal">Kanal</Option>
                                  <Option value="Sq.Ft">Sq.Ft</Option>
                                  <Option value="Sq-M">Sq-M</Option>
                                  <Option value="Sq-Y">Sq-Y</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item label="Price">
                          <Row gutter={8}>
                            <Col flex="70%">
                              <Form.Item name="totalPrice" noStyle>
                                <InputNumber placeholder="Please enter" className="full-width" size="large" />
                              </Form.Item>
                            </Col>
                            <Col flex="30%">
                              <Form.Item name="currency" noStyle>
                                <Select size="large" placeholder="Please Select">
                                  <Option value="PKR">PKR</Option>
                                  <Option value="$">$</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <div className="flex">
                          <span>
                            <h1>Installment available</h1>
                            <p>Enable if listing is available on installments</p>
                          </span>
                          <Switch className="mt-10" onChange={(e: boolean) => setShow(e)} />
                        </div>
                      </Col>
                      {show && (
                        <>
                          <Col xs={24} md={18}>
                            <Form.Item label="Advance Amount">
                              <Row gutter={8}>
                                <Col flex="70%">
                                  <Form.Item name="downPayment" noStyle>
                                    <InputNumber placeholder="Please enter" className="full-width" size="large" />
                                  </Form.Item>
                                </Col>
                                <Col flex="30%">
                                  <Form.Item name={['price', 'currency']} noStyle>
                                    <Select size="large" placeholder="Please Select" defaultValue="PKR" disabled>
                                      <Option value="PKR">PKR</Option>
                                      <Option value="$">$</Option>
                                    </Select>
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={18}>
                            <Form.Item label="No Of Installment" name="paidInstallments">
                              <InputNumber className="full-width" size="large" />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={18}>
                            <Form.Item label="Monthly Installments">
                              <Row gutter={8}>
                                <Col flex="70%">
                                  <Form.Item name={['price', 'amount']} noStyle>
                                    <InputNumber placeholder="Please enter" className="full-width" size="large" />
                                  </Form.Item>
                                </Col>
                                <Col flex="30%">
                                  <Form.Item name={['price', 'currency']} noStyle>
                                    <Select size="large" placeholder="Please Select" defaultValue="PKR" disabled>
                                      <Option value="PKR">PKR</Option>
                                      <Option value="$">$</Option>
                                    </Select>
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Form.Item>
                          </Col>
                        </>
                      )}
                    </Row>
                  </Col>
                </Row>
              </Card>

              <Card className="mt-10">
                <Row align="middle">
                  <Col xs={24} md={6}>
                    <Row justify="center" align="middle">
                      <Col md={24}>
                        <Avatar shape="square" size={64} icon={<CarryOutFilled />} />
                      </Col>
                      <Col md={24}>
                        <h1>Ad Information</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} md={18}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={18}>
                        <Form.Item name="societyName" label="Society Name" rules={[{ required: true }]}>
                          <Input className="full-width" size="large" />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={18}>
                        <Form.Item name="plotNumber" label="  Plot Number" rules={[{ required: true }]}>
                          <InputNumber className="full-width" size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item name="yearOfPurchase" label="  year Of Purchase" rules={[{ required: true }]}>
                          <InputNumber className="full-width" size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item name="discription" label="Description" rules={[{ required: true }]}>
                          <Input.TextArea className="full-width" size="large" rows={5} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item name="balloted" label="Balloted">
                          <Select size="large">
                            <Option value={true} key="1">
                              True
                            </Option>
                            <Option value={false} key="2">
                              False
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>

              <Card className="mt-10">
                <Row align="middle">
                  <Col xs={24} md={6}>
                    <Row justify="center" align="middle">
                      <Col md={24}>
                        <Avatar shape="square" size={64} icon={<HomeFilled />} />
                      </Col>
                      <Col md={24}>
                        <h1>Contact Information</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} md={18}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={18}>
                        <Form.Item name="email" label="Email">
                          <Input className="full-width" size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item name="phoneNumber" label="Mobile">
                          <Input className="full-width" size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={18}>
                        <Form.Item name="Landline" label="Land Line">
                          <Input className="full-width" size="large" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
              <Button htmlType="submit" className="submit_btn">
                Submit Ad
              </Button>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Form>
      </Spin>
    </div>
  );
};

export default CreateAd;
