import { Table } from "antd";

const AdminUserPage = () => {
  const dataSource = [
    {
      key: "1",
      name: "Ali",
      age: 32,
      address: "Istanbul",
    },
    {
      key: "2",
      name: "Burak",
      age: 25,
      address: "Malatya",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default AdminUserPage;
