import './style.less';

import {
  ColumnHeightOutlined,
  DeleteTwoTone,
  EditTwoTone,
  EyeTwoTone,
  PlusOutlined,
  RedoOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Card, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getAllUsers } from '@/api/user.api';
import { VisitorsTable } from '@/components/Table/index';
import { IUserManagementsRoutes } from '@/routes/routin';
import { paginationText } from '@/utils/paginationText';

const UserManagement = () => {
  const [usedataList, setUserData] = useState<any[]>();
  const [userPaginationConfig, setPaginationConfig] = useState({
    page: 1,
    pageSize: 10,
  });

  const { page, pageSize } = userPaginationConfig;
  const { data: usersData, isLoading } = useQuery(
    [
      `get_all_users_details/manage?page=${page}&limit=${pageSize}`,
      {
        page,
        pageSize,
      },
    ],
    ({ queryKey }) => getAllUsers(queryKey[1] as any),
  );

  useEffect(() => {
    if (usersData?.data?.result) {
      setUserData(usersData?.data?.result?.items);
    }
  }, [usersData?.data?.result]);
  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Organization Name',
      dataIndex: 'organization_name',
      key: 'name',
    },

    {
      title: 'Phone',
      dataIndex: 'contact_no',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: '90px',
      align: 'center',
      render: (_: any, record: any) =>
        record?.actions === 'initial' ? (
          ''
        ) : (
          <>
            <div className="table__icon flex justifyCenter">
              <EyeTwoTone />

              <Link to={`/${IUserManagementsRoutes.UPDATE}/${record?.id}`}>
                <EditTwoTone />
              </Link>
              <DeleteTwoTone />
            </div>
          </>
        ),
    },
  ];

  const handlePageChange = (pagination: number, pageLimit: number) => {
    setPaginationConfig({
      page: pagination === 0 ? page : pagination,
      pageSize: pageLimit === 0 ? pageSize : pageLimit,
    });
  };

  const totalItems = usersData?.data?.result?.meta?.totalItems;

  return (
    <div>
      <Card
        title="User Management"
        extra={
          <Link to={`/${IUserManagementsRoutes.CREATE}`}>
            <Button type="primary" className="add_btn">
              Add New
            </Button>
          </Link>
        }
      >
        <VisitorsTable columns={columns} bordered dataSource={usedataList} loading={isLoading} xScrollWidth={1600} />
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
      </Card>
    </div>
  );
};

export default UserManagement;
