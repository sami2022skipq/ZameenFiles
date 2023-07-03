import type { FC } from 'react';

import { Button, Col, Form, Input, Modal, Row } from 'antd';

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CreateAccount: FC<IProps> = ({ open, setOpen }) => {
  return (
    <Modal width={500} footer={null} open={open} onCancel={() => setOpen(false)}>
      <Form layout="vertical" autoComplete="off">
        <Row>
          <Col md={24}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input type="password" placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item name="confirm_password" label="Confirm Password" rules={[{ required: true }]}>
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            Sign up
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateAccount;
