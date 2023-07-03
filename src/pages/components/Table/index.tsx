import type { SpinProps } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import type { ExpandableConfig, TableRowSelection } from 'antd/lib/table/interface';
import type { FC } from 'react';

import { Table } from 'antd';
import styled from 'styled-components';

import { checkMobileScreen } from '@/utils/helperfunctions';

type SizeType = 'small' | 'middle' | 'large' | undefined;

interface IProps {
  columns?: ColumnsType<any>;
  dataSource?: any;
  loading?: boolean | SpinProps;
  size?: SizeType;
  bordered?: boolean;
  xScrollWidth?: any;
  yScrollWidth?: any;
  expandable?: ExpandableConfig<any>;
  rowSelection?: TableRowSelection<any> | any;
  rowClassName?: any;
  className?: string;
  expandIcon?: any;
  isScroll?: boolean;
  components?: any;
  defaultExpandAllRows?: boolean;
  expandedRowRender?: any;
  id?: any;
  rowKey?: any;
  key?: any;
  childrenColumnName?: string;
  tableLayout?: any;
  onRow?: any;
  footer?: any;
}

export const VisitorAppTable: FC<IProps> = ({
  columns,
  dataSource,
  loading,
  size,
  bordered,
  xScrollWidth,
  yScrollWidth,
  expandable,
  rowSelection,
  rowClassName,
  className,
  expandIcon,
  isScroll,
  components,
  defaultExpandAllRows,
  expandedRowRender,
  id,
  rowKey,
  key,
  tableLayout,
  onRow,
  childrenColumnName,
  footer,
}) => {
  return (
    <LisTableWrapper>
      <div className="data_tables">
        <Table
          key={key ? key : 'id'}
          id={id ? id : 'id'}
          rowKey={rowKey ? rowKey : 'id'}
          loading={loading}
          pagination={false}
          columns={columns}
          tableLayout={tableLayout}
          onRow={onRow}
          bordered={bordered}
          size={size || 'small'}
          dataSource={dataSource}
          className={className}
          expandable={expandable}
          expandedRowRender={expandedRowRender}
          rowClassName={rowClassName}
          rowSelection={rowSelection}
          components={components}
          expandIcon={expandIcon}
          childrenColumnName={childrenColumnName}
          defaultExpandAllRows={defaultExpandAllRows ? defaultExpandAllRows : false}
          footer={footer}
          scroll={
            !isScroll
              ? {
                  x: xScrollWidth === false || xScrollWidth ? xScrollWidth : 800,
                  y: yScrollWidth === false || yScrollWidth ? yScrollWidth : 620,
                }
              : {
                  x: xScrollWidth === false || xScrollWidth ? xScrollWidth : 1200,
                  y: yScrollWidth === false || yScrollWidth ? yScrollWidth : 620,
                }
          }
        />
      </div>
    </LisTableWrapper>
  );
};

const LisTableWrapper = styled.div`
  && tbody > tr:hover > td {
    background: #f5f5f5;
  }
  .ant-table-small .ant-table-thead > tr > th {
    border: 1px solid #ffff;
    ${checkMobileScreen() ? 'font-size: 10px;' : ''}
    ::before {
      display: none;
    }
  }

  .ant-table-small .ant-table-tbody > tr > td {
    ${checkMobileScreen() ? 'font-size: 10px;' : ''}
  }
`;
