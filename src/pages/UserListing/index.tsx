import './style.less';

import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Card, message, Pagination, Popconfirm, Tag } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { deleteAdd, getAllUserListing } from '@/api/listsing';
import { VisitorsTable } from '@/components/Table/index';
import { IUserManagementsRoutes } from '@/routes/routin';
import { paginationText } from '@/utils/paginationText';

const UserListing = () => {
  const queryClient = useQueryClient();
  const [userdataList, setUserListingData] = useState<any[]>();
  const { mutate: mutateDelete, isLoading: deleteLoading } = useMutation(deleteAdd);
  const [userPaginationConfig, setPaginationConfig] = useState({
    page: 1,
    pageSize: 10,
  });

  const { page, pageSize } = userPaginationConfig;
  const { data: usersData, isLoading } = useQuery([`get_all_users_listing`], () => getAllUserListing());

  useEffect(() => {
    if (usersData?.data) {
      setUserListingData(usersData?.data);
    }
  }, [usersData?.data]);

  const handleRemove = async (id: string) => {
    try {
      await mutateDelete(id, {
        onSuccess: (res: any) => {
          queryClient?.invalidateQueries();
          message.success('Successfully Deleted');
        },
        onError: (res: any) => {
          message.error('something went wrong please try again');
        },
      });
    } catch (error) {}
  };

  const columns: any = [
    {
      title: 'Plot Number',
      dataIndex: 'plotNumber',
      width: '120px',
      key: 'plotNumber',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      width: '150px',
      key: 'location',
    },

    {
      title: 'Society Name',
      dataIndex: 'societyName',
      width: '150px',
      key: 'societyName',
    },

    {
      title: 'Down Payment',
      dataIndex: 'downPayment',
      width: '120px',
      key: 'downPayment',
    },

    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      width: '120px',
      key: 'totalPrice',
    },
    {
      title: 'Year of Purchase',
      dataIndex: 'yearOfPurchase',
      width: '160px',
      key: 'yearOfPurchase',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      width: '100px',
    },

    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '100px',
      render: (value: string) => (value ? moment(value)?.format('MM/DD/YYYY') : ''),
    },

    {
      title: 'Description',
      dataIndex: 'discription',
      key: 'discription',
      width: '350px',
    },

    {
      title: 'Balloted',
      dataIndex: 'balloted',
      key: 'balloted',
      render: (value: boolean) => (
        <>
          <Tag color={value === true ? 'blue' : 'red'}>{value === true ? 'Yes' : 'No'}</Tag>
        </>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: '120px',
      align: 'center',
      render: (_: any, record: any) =>
        record?.actions === 'initial' ? (
          ''
        ) : (
          <>
            <div className="table__icon flex justifyCenter">
              <Link to={`/${IUserManagementsRoutes.UPDATE}/${record?._id}`}>
                <EditTwoTone />
              </Link>

              <Popconfirm
                title="Are you sure to delete this?"
                okText="Yes"
                okType="danger"
                onConfirm={() => handleRemove(record._id)}
              >
                <DeleteTwoTone />
              </Popconfirm>
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
    <div className="mt-20">
      <Card
        title="User Listing"
        extra={
          <Link to={`/${IUserManagementsRoutes.CREATE}`}>
            <Button type="primary" className="add_btn">
              Add New
            </Button>
          </Link>
        }
      >
        <VisitorsTable
          columns={columns}
          bordered
          dataSource={userdataList}
          loading={isLoading || deleteLoading}
          xScrollWidth={1600}
        />
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

export default UserListing;
