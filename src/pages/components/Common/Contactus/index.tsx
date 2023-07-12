import { Button, Card, Col, Form, Input, Row } from 'antd';
import React from 'react';

const ContactUs = () => {
  const [form] = Form.useForm();

  return (
    <div className="mt-10 mb-20" id="contact">
      <Row>
        <Col md={4}></Col>
        <Col md={16} sm={24} xs={24}>
          <h1>Contact US</h1>
          <Card style={{ boxShadow: '5px 14px 8px #c0b8b8', marginBottom: '50px' }}>
            <Form form={form} layout="vertical" autoComplete="off">
              <Row gutter={[16, 16]}>
                <Col md={8}>
                  <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>

                <Col md={8}>
                  <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>

                <Col md={8}>
                  <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>
                <Col md={8}>
                  <Form.Item name="country" label="Country">
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>

                <Col md={8}>
                  <Form.Item name="city" label="City">
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>

                <Col md={8}>
                  <Form.Item name="state" label="State">
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>
                <Col md={24}>
                  <Form.Item name="notes" label="Note">
                    <Input.TextArea placeholder="input placeholder" cols={5} />
                  </Form.Item>
                </Col>
                <div className="full-width textRight">
                  <Button type="primary">Send</Button>
                </div>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
