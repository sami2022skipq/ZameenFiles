import './style.less';

import {
  CheckCircleFilled,
  MailFilled,
  MessageFilled,
  PhoneFilled,
  SafetyCertificateFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Badge, Button, Card, Carousel, Col, Input, List, Row, Select, Switch, Tag } from 'antd';

const PropertyDetail = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  const realEstateImages = [
    'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
    'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
    'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
  ];

  const renderSlideContent = (image: any, index: any) => {
    return (
      <div className="slide-content">
        <Badge.Ribbon text="Super Agent" color="blue" placement="start">
          <img src={image} alt={`Real Estate ${index}`} style={{ height: '200px', width: '100%' }} />
        </Badge.Ribbon>
        <div className="slide-footer">
          <span className="image-index">
            <Badge count={index + 1} />
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Affix>
        <Card style={{ marginTop: '90px' }}>
          <div className="flex" style={{ padding: '0 244px' }}>
            <Input placeholder="City, community, or building" />
            <Select placeholder="Select" className="ml-10" />
            <Select placeholder="Select" className="ml-10" />
            <Select placeholder="Select" className="ml-10" />
            <Select placeholder="Select" className="ml-10" />
            <Button type="primary" className="ml-5">
              <SearchOutlined />
            </Button>
          </div>
          <div className="flex" style={{ padding: '0 244px' }}>
            <div className="filter_section">
              <SafetyCertificateFilled color="primary" className="filter_section_icon" /> Verified <Switch />
            </div>
            <div className="filter_section ml-20">
              <CheckCircleFilled className="filter_section_icon" /> Super Agent <Switch />
            </div>
          </div>
        </Card>
      </Affix>
      <Row gutter={8}>
        <Col md={3}></Col>
        <Col md={12}>
          <Row>
            <Col md={24}>
              <Card className="mt-20">
                <Row gutter={[16, 16]}>
                  <Col md={10}>
                    <Carousel effect="fade" autoplay>
                      {realEstateImages.map((image, index) => (
                        <div key={index}>{renderSlideContent(image, index)}</div>
                      ))}
                    </Carousel>
                  </Col>

                  <Col md={14}>
                    <span className="flex justifySpaceBetween">
                      <p className="ml-10">Apartment</p>
                      <p className="mr-10">Featured</p>
                    </span>
                    <h1>125000 AED/Year</h1>
                    <span className="flex">
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                    </span>
                  </Col>
                  <Col md={24} className="mt-20">
                    <div className="flex justifySpaceBetween" style={{ height: '55px', lineHeight: '55px' }}>
                      <span>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{' '}
                        <span className="mt-10">Riaz ahmad khan</span>
                      </span>
                      <span>
                        <div className="flex mt-10">
                          <Button type="default" style={{ background: 'red', color: '#fff', border: 'red' }}>
                            <PhoneFilled /> Call
                          </Button>
                          <Button style={{ background: 'red', color: '#fff', border: 'red' }}>
                            <MailFilled /> Email
                          </Button>
                          <Button style={{ background: '#318b30', color: '#fff', border: '#318b30' }}>
                            <MessageFilled />
                            WhatsApp
                          </Button>
                        </div>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={24}>
              <Card className="mt-20">
                <Row gutter={[16, 16]}>
                  <Col md={10}>
                    <Carousel effect="fade" autoplay>
                      {realEstateImages.map((image, index) => (
                        <div key={index}>{renderSlideContent(image, index)}</div>
                      ))}
                    </Carousel>
                  </Col>

                  <Col md={14}>
                    <span className="flex justifySpaceBetween">
                      <p className="ml-10">Apartment</p>
                      <p className="mr-10">Featured</p>
                    </span>
                    <h1>125000 AED/Year</h1>
                    <span className="flex">
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                    </span>
                  </Col>
                  <Col md={24} className="mt-20">
                    <div className="flex justifySpaceBetween" style={{ height: '55px', lineHeight: '55px' }}>
                      <span>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{' '}
                        <span className="mt-10">Riaz ahmad khan</span>
                      </span>
                      <span>
                        <div className="flex mt-10">
                          <Button type="default" style={{ background: 'red', color: '#fff', border: 'red' }}>
                            <PhoneFilled /> Call
                          </Button>
                          <Button style={{ background: 'red', color: '#fff', border: 'red' }}>
                            <MailFilled /> Email
                          </Button>
                          <Button style={{ background: '#318b30', color: '#fff', border: '#318b30' }}>
                            <MessageFilled />
                            WhatsApp
                          </Button>
                        </div>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={24}>
              <Card className="mt-20">
                <Row gutter={[16, 16]}>
                  <Col md={10}>
                    <Carousel effect="fade" autoplay>
                      {realEstateImages.map((image, index) => (
                        <div key={index}>{renderSlideContent(image, index)}</div>
                      ))}
                    </Carousel>
                  </Col>

                  <Col md={14}>
                    <span className="flex justifySpaceBetween">
                      <p className="ml-10">Apartment</p>
                      <p className="mr-10">Featured</p>
                    </span>
                    <h1>125000 AED/Year</h1>
                    <span className="flex">
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                      <Tag color="green">Dream Apt</Tag>
                    </span>
                  </Col>
                  <Col md={24} className="mt-20">
                    <div className="flex justifySpaceBetween" style={{ height: '55px', lineHeight: '55px' }}>
                      <span>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{' '}
                        <span className="mt-10">Riaz ahmad khan</span>
                      </span>
                      <span>
                        <div className="flex mt-10">
                          <Button type="default" style={{ background: 'red', color: '#fff', border: 'red' }}>
                            <PhoneFilled /> Call
                          </Button>
                          <Button style={{ background: 'red', color: '#fff', border: 'red' }}>
                            <MailFilled /> Email
                          </Button>
                          <Button style={{ background: '#318b30', color: '#fff', border: '#318b30' }}>
                            <MessageFilled />
                            WhatsApp
                          </Button>
                        </div>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <List
            className="mt-20"
            size="large"
            header={<div>Most reviewed buildings</div>}
            footer={null}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
    </>
  );
};

export default PropertyDetail;
