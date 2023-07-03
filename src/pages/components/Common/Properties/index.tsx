import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Row, Select, Tabs } from 'antd';
import { Link } from 'react-router-dom';

import { IPropertyRoutes } from '@/routes/routin';

const { Meta } = Card;

const AppProperties = () => {
  const data = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
    { title: 'Card 5', description: 'Description 5' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 7', description: 'Description 7' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card style={{ width: '900px', position: 'absolute', top: '78vh', boxShadow: '5px 10px 8px #c0b8b8' }}>
          <Tabs type="card">
            <Tabs.TabPane tab="Sell" key={1}>
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
              <div className="full-width mt-10">
                <Input addonBefore={<SearchOutlined />} size="large" />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Rent" key={2}>
              <div className="flex">
                <Input placeholder="City, community, or building" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
              </div>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </div>
      <div style={{ marginTop: '200px', padding: '0 212px' }}>
        <Row gutter={[16, 16]} id="#hero">
          <Col md={24}>
            <h1>Browse Properties</h1>
          </Col>
          <Col md={8}>
            <Link to={IPropertyRoutes.DETAIL}>
              <Card
                hoverable
                cover={
                  <div style={{ width: '100%' }}>
                    <img
                      alt="Real Estate"
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <h2 style={{ color: '#fff', fontSize: '24px' }}>Europe Street beat</h2>
                      <p style={{ color: '#fff' }}>www.instagram.com</p>
                    </div>
                  </div>
                }
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </Link>
          </Col>
          <Col md={8}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                  style={{ height: '200px' }}
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>

          <Col md={8}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                  style={{ height: '200px' }}
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={24} style={{ padding: '0, 244px' }}>
            <h1>Top Agents</h1>
          </Col>
          {data?.map((item: any) => {
            return (
              <Col md={4}>
                <Link to="/client/details">
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                        style={{ height: '200px' }}
                      />
                    }
                    actions={[
                      <div>
                        {' '}
                        4<br /> For Rent
                      </div>,
                      <div>
                        4 <br /> For Sale
                      </div>,
                    ]}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default AppProperties;
