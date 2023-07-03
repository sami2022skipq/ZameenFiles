import './style.less';

import { Layout } from 'antd';

import ContactUs from '../components/Common/Contactus';
import HeroApp from '../components/Common/Hero/hero';
import AppProperties from '../components/Common/Properties';

const { Footer } = Layout;

const HomeComponent = () => {
  return (
    <div>
      <HeroApp />
      <AppProperties />
      <ContactUs />
      <Footer>Footer</Footer>
    </div>
  );
};

export default HomeComponent;
