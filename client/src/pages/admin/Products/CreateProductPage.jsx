import { Form, Input, InputNumber, Select, Spin, message } from "antd";
import { useState } from "react";

const CreateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Category successfully created.");
        form.resetFields();
      } else {
        message.error("Error while creating the category.");
      }
    } catch (error) {
      console.log("Category update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter product name.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="current"
          rules={[
            {
              required: true,
              message: "Please enter product price!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Discount Rate"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please enter a product discount rate!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Product Images (Links)"
          name="img"
          rules={[
            {
              required: true,
              message: "Please enter at least 4 product image url",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Enter each image url in a new line"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Colors (RGB Codes)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Please enter at least on product color.",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Enter each RGB code on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Size"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Please enter at least one product size.",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each size on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select at least one category!",
            },
          ]}
        >
          <Select>
            <Select.Option value="Smartphone" key={"Smartphone"}>
              Smartphone
            </Select.Option>
          </Select>
        </Form.Item>

        {/* 
        <Button type="primary" htmlType="submit">
          Create
        </Button> */}
      </Form>
    </Spin>
  );
};

export default CreateProductPage;