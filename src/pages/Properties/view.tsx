import './style.less';

import { MailFilled, MessageFilled, PhoneFilled } from '@ant-design/icons';
import {
  faBath,
  faBed,
  faBuilding,
  faCity,
  faExpand,
  faHome,
  faMapMarkerAlt,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Affix, Button, Card, Col, Descriptions, Divider, Row } from 'antd';

import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';

const SinglePropertyDetail = () => {
  return (
    <Card>
      <div />

      <Row className="mt-10" gutter={[16, 16]}>
        <Col xs={0} md={3} />
        <Col xs={24} md={17} style={{ padding: '10px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={17}>
              <img src={img1} alt="Image 1" style={{ height: '600px', width: '100%' }} />
            </Col>
            <Col xs={24} md={7}>
              <Row>
                <Col xs={24} sm={24}>
                  <img src={img2} alt="Image 2" style={{ height: '300px', width: '100%' }} />
                </Col>
                <Col xs={24} sm={24}>
                  <img src={img3} alt="Image 3" style={{ height: '300px', width: '100%' }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={0} md={3} />
      </Row>

      <Row gutter={[16, 16]}>
        <Col md={3}></Col>
        <Col md={12}>
          <Card className="mt-10">
            <span className="flex mb-10">
              <b>
                {' '}
                Balloted <Divider type="vertical" />
              </b>
              <b> Non-balloted </b>{' '}
              <Divider type="vertical" style={{ fontSize: '18px !important', fontWeight: 'bold' }} />
              <b>
                {' '}
                Residential <Divider type="vertical" />
              </b>
              <b>
                {' '}
                commercial <Divider type="vertical" />
              </b>
            </span>

            <Descriptions bordered column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Name">Name</Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faCity} /> City
                  </>
                }
              >
                Karachi
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
                  </>
                }
              >
                Location
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faMoneyBillAlt} /> Price
                  </>
                }
              >
                PKR 47 Lakh to 1.15 Crore
              </Descriptions.Item>

              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faHome} /> Types
                  </>
                }
              >
                Residential Plots
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faBuilding} /> Developer
                  </>
                }
              >
                Paramount Associates
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faExpand} /> Area
                  </>
                }
              >
                Area
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faBed} /> No of rooms
                  </>
                }
              >
                4
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <FontAwesomeIcon icon={faBath} /> No of bathrooms
                  </>
                }
              >
                4
              </Descriptions.Item>
            </Descriptions>
            <p>
              Discover the epitome of modern living at Palm City, Lahore's newest and most sought-after residential
              development. It is an upscale residential community on Main Ferozepur Road, offering plots in various
              sizes including 3.5, 5, 7, 8, & 10-marla. Envisioned to offer a plush lifestyle, the project is equipped
              with world-class amenities & features and a secure environment. Approved by all relevant authorities and
              the Lahore Development Authority (LDA), this exceptional housing scheme offers unmatched convenience and
              peace of mind. Given its location, the community has a strategic position on Main Ferozepur Road that puts
              it in proximity to prominent landmarks, major roads, top recreational facilities, and leading educational
              and healthcare institutions. The housing scheme is 5 minutes away from Ring Road, 15 minutes away from
              Allama Iqbal International Airport, and 20 minutes away from Kalma Chowk. Immerse yourself in a serene and
              green environment, meticulously designed with picturesque landscaping and sprawling green spaces. With
              thoughtfully crafted infrastructure, including well-connected roads, beautiful walkways, LED streetlights,
              an uninterrupted supply of Sui gas, and underground fibre optics, the project ensures seamless
              connectivity and a dreamlike atmosphere for all its residents and visitors. Experience the convenience of
              having a top-notch school, a fully-equipped hospital, and a centrally air-conditioned mosque within the
              community. Indulge in a vibrant social life with an exclusive health and fitness club, delightful cafes,
              and restaurants. You can rest assured that your safety is our top priority which is why the community is
              equipped with advanced security measures. Palm City is an exceptional and secure community ideal for
              families, offering a welcoming environment and exciting new blocks set to launch soon.
            </p>
          </Card>
        </Col>
        <Col md={5} className="ml-10 mr-10 sticky-container mt-10">
          <Affix offsetTop={60}>
            <Card>
              <h1>MAKE AN ENQUIRY</h1>
              <div className="flex">
                <Button type="default" className=" btn_call_email">
                  <PhoneFilled /> Call
                </Button>
                <Button className=" btn_call_email">
                  <MailFilled /> Email
                </Button>
                <Button className="btn_whatsapp">
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
        <Col md={3}></Col>
      </Row>
    </Card>
  );
};

export default SinglePropertyDetail;
