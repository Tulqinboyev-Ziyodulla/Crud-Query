import React from 'react';
import { Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";

interface DataType {
    id: number;
    name: string;
    surname: string;
    age: number;
}

interface CustomTableProps {
    data: DataType[];
    onDelete: (record: DataType) => void;
    onEdit: (record: DataType) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({ data, onDelete, onEdit }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <Space size="middle">
                    <MoreOutlined className="cursor-pointer" />
                    <EditOutlined onClick={() => onEdit(record)} className="cursor-pointer" />
                    <DeleteOutlined onClick={() => onDelete(record)} className="cursor-pointer" />
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default CustomTable;
