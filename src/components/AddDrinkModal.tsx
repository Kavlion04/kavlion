import React from "react";
import { Modal, Form, Input, InputNumber, Select, Space, Button } from "antd";
import { Drink } from "@/types/drink";
import { ImageUpload } from "./ImageUpload";

const { Option } = Select;

interface AddDrinkModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onSubmit: (values: Drink) => Promise<boolean>;
  form: any;
}

export const AddDrinkModal: React.FC<AddDrinkModalProps> = ({
  isVisible,
  onCancel,
  onSubmit,
  form,
}) => {
  const handleSubmit = async (values: Drink) => {
    const success = await onSubmit(values);
    if (success) {
      onCancel();
      form.resetFields();
    }
  };

  return (
    <Modal
      title="Add New Drink"
      open={isVisible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="mt-4"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the drink title!" }]}
        >
          <Input placeholder="Enter drink title" size="large" />
        </Form.Item>

        <Form.Item
          label="Company Name"
          name="company_name"
          rules={[
            { required: true, message: "Please input the company name!" },
          ]}
        >
          <Input placeholder="Enter company name" size="large" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input the price!" }]}
        >
          <InputNumber
            placeholder="Enter price"
            size="large"
            className="w-full"
            min={0}
            step={1000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value: string | undefined) => {
              const parsed = parseFloat((value || "").replace(/,/g, ""));
              return isNaN(parsed) ? 0 : parsed;
            }}
          />
        </Form.Item>

        <Form.Item
          label="Volume"
          name="volume"
          rules={[{ required: true, message: "Please select the volume!" }]}
        >
          <Select placeholder="Select volume" size="large">
            <Option value={0.33}>0.33 L</Option>
            <Option value={0.5}>0.5 L</Option>
            <Option value={1}>1 L</Option>
            <Option value={2}>2 L</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please select the drink type!" }]}
        >
          <Select placeholder="Select drink type" size="large">
            <Option value="gazli">Gazli</Option>
            <Option value="gazsiz">Gazsiz</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Image" name="image">
          <Form.Item name="image" noStyle>
            <ImageUpload
              value={form.getFieldValue("image")}
              onChange={(url) => form.setFieldsValue({ image: url })}
              onRemove={() => form.setFieldsValue({ image: "" })}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item className="mb-0 pt-4">
          <Space className="w-full justify-end">
            <Button onClick={onCancel} size="large">
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-blue-500 hover:bg-blue-600"
            >
              Add Drink
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};
