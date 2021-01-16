import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React from 'react';
import fakeData from '../../../../fakeData/foods';

const FoodList = () => {
  const allFoods = fakeData;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: '0',
    },
    {
      title: 'Subtitle',
      dataIndex: 'subTitle',
      key: '1',
    },
    {
      title: 'Category',
      dataIndex: 'type',
      key: '2',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: '3',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: '4',
      render: () => {
        return (
          <Button
            type="secondary"
            // icon={}
            // shape="round"
            // size="middle"
            // danger
          >
            <DeleteTwoTone />
          </Button>
        );
      },
    },
  ];
  //   console.log(allFoods);
  return (
    <div className="p-3">
      <Table columns={columns} dataSource={allFoods} />
    </div>
  );
};

export default FoodList;
