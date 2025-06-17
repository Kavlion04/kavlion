import React from "react";
import { Card, Button, Space, Popconfirm } from "antd";
import { Trash2, Edit } from "lucide-react";
import { Drink } from "@/types/drink";

interface DrinkCardProps {
  drink: Drink;
  onDelete: (id: number) => void;
  onEdit: (drink: Drink) => void;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({
  drink,
  onDelete,
  onEdit,
}) => {
  return (
    <Card
      hoverable
      className="h-full shadow-md"
      cover={
        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          {drink.image ? (
            <img
              alt={drink.title}
              src={drink.image}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-gray-400 text-lg font-medium">No Image</div>
          )}
        </div>
      }
      actions={[
        <Button
          key="edit"
          type="text"
          icon={<Edit size={16} />}
          className="flex items-center justify-center"
          onClick={() => onEdit(drink)}
        >
          Edit
        </Button>,
        <Popconfirm
          key="delete"
          title="Are you sure you want to delete this drink?"
          onConfirm={() => onDelete(drink.id!)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="text"
            danger
            icon={<Trash2 size={16} />}
            className="flex items-center justify-center"
          >
            Delete
          </Button>
        </Popconfirm>,
      ]}
    >
      <Card.Meta
        title={
          <div className="text-lg font-semibold text-gray-800">
            {drink.title}
          </div>
        }
        description={
          <Space direction="vertical" className="w-full">
            <div className="text-sm text-gray-600">
              <strong>Company:</strong> {drink.company_name}
            </div>
            <div className="text-sm text-gray-600">
              <strong>Price:</strong> {drink.price.toLocaleString()} so'm
            </div>
            <div className="text-sm text-gray-600">
              <strong>Volume:</strong> {drink.volume}L
            </div>
            <div className="text-sm text-gray-600">
              <strong>Type:</strong> {drink.type}
            </div>
          </Space>
        }
      />
    </Card>
  );
};
