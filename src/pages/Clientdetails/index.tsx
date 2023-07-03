import './style.less';

import { MailFilled, MessageFilled, PhoneFilled, SendOutlined } from '@ant-design/icons';
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Descriptions,
  Divider,
  Image,
  Row,
  Select,
  Tag,
} from 'antd';

const ClientDetails = () => {
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
      <div className="main_client_div">
        <div className="flex justifyCenter color_white">
          <p>
            <b>Javed Ali Khan</b>
            <br />
            <b>Agent</b>
            <br />
            <Tag color="cyan">SUPER AGENT</Tag>
          </p>
        </div>
        <div style={{ position: 'absolute', left: '410px', top: '150px' }}>
          <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </div>

        <Row style={{ marginTop: '120px' }}>
          <Col md={5}></Col>
          <Col md={13}>
            <Card>
              <Descriptions
                title="Personal Information"
                bordered
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                <Descriptions.Item label="Nationality">Pakistan</Descriptions.Item>
                <Descriptions.Item label="Area">Sales</Descriptions.Item>
                <Descriptions.Item label="Language">English</Descriptions.Item>
                <Descriptions.Item label="Mobile">+923166022280</Descriptions.Item>
                <Descriptions.Item label="BRN#">1717717</Descriptions.Item>
                <Descriptions.Item label="CNIC">71403-0346410-5</Descriptions.Item>
                <Descriptions.Item label="Experience">Pakistan</Descriptions.Item>
              </Descriptions>

              <Divider />

              <h1>About Me</h1>
              <p>
                Being knowledgeable about UAE real estate market, having a positive and professional attitude towards
                everything that I do makes me an agent you definitely would like to work with. Having started my
                professional career in hospitality and tourism sector, I clearly understand how to provide the best
                customer service and to exceed expectations of my clients. Anticipating needs of my customers, attention
                to details and delivering best practice are my core values. I will go an extra mile to make sure you are
                satisfied with services provided.
              </p>
              <h1>My Properties</h1>
              <div className="flex">
                <Select placeholder="Rent" className="w-100"></Select>
                <Select placeholder="Featured" className="w-100 ml-10"></Select>
              </div>
            </Card>
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
                    <Tag>Dream Apt</Tag>
                    <Tag>Dream Apt</Tag>
                    <Tag>Dream Apt</Tag>
                    <Tag>Dream Apt</Tag>
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
                    <Tag>Dream Apt</Tag>
                    <Tag>Dream Apt</Tag>
                    <Tag>Dream Apt</Tag>
                    <Tag>Dream Apt</Tag>
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
            <div className="mt-10">Footer</div>
          </Col>

          <Col md={5} className="ml-10 mr-10 sticky-container">
            <Affix offsetTop={60}>
              <Card>
                <h1>Contact This Agent</h1>
                <div className="flex">
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
                <p>
                  <b>Rizwan Javed Ali Khan</b> usually response with in five mins
                </p>
                <Divider className="mt-10" />
                <p>Blue Water Real Estate Abu Dhabi</p>
              </Card>
            </Affix>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ClientDetails;
