import type { FC } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Badge, Popover, Spin, Tabs, Tooltip } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as NoticeSvg } from '@/assets/header/notice.svg';
import { useLocale } from '@/locales';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { TabPane } = Tabs;

const HeaderNoticeComponent: FC = () => {
  const [visible, setVisible] = useState(false);

  const { noticeCount } = useSelector(state => state.user);
  const { formatMessage } = useLocale();

  const tabs = (
    <div>
      <Spin tip="Loading..." indicator={antIcon}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={`${formatMessage({
              id: 'app.notice.messages',
            })}(5)`}
            key="1"
          ></TabPane>

          <TabPane
            tab={`${formatMessage({
              id: 'app.notice.news',
            })}(4`}
            key="2"
          ></TabPane>
          <TabPane
            tab={`${formatMessage({
              id: 'app.notice.tasks',
            })}(2`}
            key="3"
          ></TabPane>
        </Tabs>
      </Spin>
    </div>
  );

  return (
    <Popover
      content={tabs}
      overlayClassName="bg-2"
      placement="bottomRight"
      trigger={['click']}
      open={visible}
      onOpenChange={v => setVisible(v)}
      overlayStyle={{
        width: 336,
      }}
    >
      <Tooltip
        title={formatMessage({
          id: 'gloabal.tips.theme.noticeTooltip',
        })}
      >
        <Badge count={noticeCount} overflowCount={999}>
          <span className="notice" id="notice-center">
            <NoticeSvg className="anticon" />
          </span>
        </Badge>
      </Tooltip>
    </Popover>
  );
};

export default HeaderNoticeComponent;
