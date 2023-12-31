import './style.less';

import {
  BankFilled,
  CheckCircleFilled,
  EnvironmentFilled,
  MailFilled,
  MessageFilled,
  NumberOutlined,
  PhoneFilled,
  SafetyCertificateFilled,
  SearchOutlined,
} from '@ant-design/icons';
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Input,
  List,
  Pagination,
  Rate,
  Row,
  Select,
  Switch,
  Tag,
} from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getAllListingPublic } from '@/api/listsing';
import { paginationText } from '@/utils/paginationText';

const PropertyDetail = () => {
  const [publicListing, setPublicListing] = useState<any>();
  const [value, setValue] = useState(3);
  const [userPaginationConfig, setPaginationConfig] = useState({
    page: 1,
    pageSize: 10,
  });
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  const { page, pageSize } = userPaginationConfig;

  const handlePageChange = (pagination: number, pageLimit: number) => {
    setPaginationConfig({
      page: pagination === 0 ? page : pagination,
      pageSize: pageLimit === 0 ? pageSize : pageLimit,
    });
  };

  const { data: ListingData, isLoading } = useQuery([`get_all_listing`], () => getAllListingPublic());

  useEffect(() => {
    if (ListingData) {
      setPublicListing(ListingData?.data);
    }
  }),
    [ListingData];
  console.log(publicListing, 'publicListing');
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

  const totalItems = 40;

  const AnimatedListItem = ({ item }: any) => {
    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.2 }}
        whileHover="visible"
      >
        <List.Item className="flex justifySpaceBetween">
          <span>{item}</span>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
          </span>
        </List.Item>
      </motion.div>
    );
  };

  return (
    <Card>
      <Affix offsetTop={68}>
        <Card className="search_field">
          <div className="flex">
            <Input placeholder="City, community, or building" />
            <Select placeholder="Select" className="ml-10" />
            <Select placeholder="Select" className="ml-10" />
            <Select placeholder="Select" className="ml-10" />
            <Select placeholder="Select" className="ml-10" />
            <Button type="primary" className="ml-5">
              <SearchOutlined />
            </Button>
          </div>
          <div className="flex">
            <div className="filter_section">
              <SafetyCertificateFilled color="primary" className="filter_section_icon" /> Verified <Switch />
            </div>
            <div className="filter_section ml-20">
              <CheckCircleFilled className="filter_section_icon" /> Super Agent <Switch />
            </div>
          </div>
        </Card>
      </Affix>
      <Row gutter={8} className="p-10">
        <Col md={3}></Col>
        <Col md={12}>
          <Row>
            {publicListing?.map((item: any, index: number) => {
              return (
                <Col md={24} key={index}>
                  <Link to="/property/detail">
                    <motion.div
                      whileHover={{ scale: 1.1, transition: { duration: 1.2 } }}
                      whileTap={{ scale: 0.9 }}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate="visible"
                    >
                      <Card
                        className="mt-20 main_card"
                        title={
                          <>
                            <BankFilled className="mr-5" />
                            {item?.societyName}
                          </>
                        }
                      >
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
                              <p className="mr-10">
                                {
                                  <>
                                    <EnvironmentFilled className="mr-5" />
                                    <b>{item?.location}</b>
                                  </>
                                }
                              </p>
                              <p className="ml-10">
                                <NumberOutlined className="mr-5" />
                                <b>Plot No: {item?.plotNumber}</b>
                              </p>
                            </span>
                            <h3>Area-{item?.area} Marla</h3>
                            <Divider />
                            <span className="flex">
                              <Tag color="green">Dream Apt</Tag>
                              <Tag color="green">Dream Apt</Tag>
                              <Tag color="green">Dream Apt</Tag>
                              <Tag color="green">Dream Apt</Tag>
                            </span>
                            <Divider />
                            <span className="flex mt-10">
                              <b>
                                {' '}
                                Balloted <Divider type="vertical" />
                              </b>
                              <b>
                                {' '}
                                {item?.balloted !== true ? (
                                  <Tag color="red">No</Tag>
                                ) : (
                                  <Tag color="green">Yes</Tag>
                                )}{' '}
                              </b>{' '}
                              {/* <b>
                              {' '}
                              Residential <Divider type="vertical" />
                            </b>
                            <b>
                              {' '}
                              commercial <Divider type="vertical" />
                            </b> */}
                            </span>
                          </Col>
                          <Col md={24} className="mt-20">
                            <div className="flex justifySpaceBetween card_bottom">
                              <span>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{' '}
                                <span className="mt-10">Riaz ahmad khan</span>
                              </span>
                              <span>
                                <div className="flex mt-10">
                                  <Button
                                    type="default"
                                    className="btn_call_email"
                                    onClick={() => (window.location.href = `tel:${item?.phoneNumber}`)}
                                  >
                                    <PhoneFilled /> Call
                                  </Button>
                                  <Button
                                    className="btn_call_email"
                                    onClick={() => (window.location.href = `mailto:${item?.email}`)}
                                  >
                                    <MailFilled /> Email
                                  </Button>
                                  <Button className="btn_whatsapp">
                                    <MessageFilled />
                                    WhatsApp
                                  </Button>
                                </div>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </motion.div>
                  </Link>
                </Col>
              );
            })}

            <Col md={24}>
              <div className="mt-40 flex alignCenter justifySpaceBetween">
                {paginationText(page, pageSize, totalItems)}
                <Pagination
                  total={totalItems}
                  defaultPageSize={pageSize}
                  defaultCurrent={page}
                  onChange={handlePageChange}
                  showQuickJumper
                  showSizeChanger={totalItems > 10 ? true : false}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={1} />
        <Col md={5}>
          <List
            className="mt-20"
            size="large"
            header={<div>Most reviewed buildings</div>}
            footer={null}
            bordered
            dataSource={data}
            renderItem={item => <AnimatedListItem item={item} />}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default PropertyDetail;
