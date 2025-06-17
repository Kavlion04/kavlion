import React, { useState } from "react";
import { Button, Form, Row, Col, Typography } from "antd";
import { Plus } from "lucide-react";
import { useDrinks } from "@/hooks/useDrinks";
import { DrinkCard } from "@/components/DrinkCard";
import { AddDrinkModal } from "@/components/AddDrinkModal";
import { EditDrinkModal } from "@/components/EditDrinkModal";
import { Drink } from "@/types/drink";

const { Title } = Typography;

const Index = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const {
    drinks,
    loading,
    handleAddDrink,
    handleEditDrink,
    handleDeleteDrink,
  } = useDrinks();

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  const handleAddCancel = () => {
    setIsAddModalVisible(false);
    addForm.resetFields();
  };

  const handleEdit = (drink: Drink) => {
    setSelectedDrink(drink);
    setIsEditModalVisible(true);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
    setSelectedDrink(null);
    editForm.resetFields();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Title level={1} className="mb-0">
            Drinks Management
          </Title>
          <Button
            type="primary"
            size="large"
            icon={<Plus size={20} />}
            onClick={showAddModal}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Add Drink
          </Button>
        </div>

        <Row gutter={[24, 24]}>
          {drinks.map((drink) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={drink.id}>
              <DrinkCard
                drink={drink}
                onDelete={handleDeleteDrink}
                onEdit={handleEdit}
              />
            </Col>
          ))}
        </Row>

        {drinks.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">
              No drinks found. Add some drinks to get started!
            </div>
          </div>
        )}

        <AddDrinkModal
          isVisible={isAddModalVisible}
          onCancel={handleAddCancel}
          onSubmit={handleAddDrink}
          form={addForm}
        />

        {selectedDrink && (
          <EditDrinkModal
            isVisible={isEditModalVisible}
            onCancel={handleEditCancel}
            onSubmit={handleEditDrink}
            form={editForm}
            drink={selectedDrink}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
