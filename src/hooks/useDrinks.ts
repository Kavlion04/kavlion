import { useState, useEffect } from 'react';
import { notification } from 'antd';
import { Drink } from '@/types/drink';

// Mock data to replace the JSON server dependency
const mockDrinks: Drink[] = [
  {
    id: 1,
    title: "Fanta",
    company_name: "Coca-Cola",
    price: 7000,
    volume: 0.5,
    type: "gazli",
    image: "https://images.unsplash.com/photo-1624552802755-7fa39e7661eb?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Sprite",
    company_name: "Coca-Cola",
    price: 6500,
    volume: 0.33,
    type: "gazli",
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Orange Juice",
    company_name: "Fresh Co",
    price: 8500,
    volume: 1.0,
    type: "gazsiz",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop"
  }
];

export const useDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(false);

  // Simulate API loading with mock data
  useEffect(() => {
    const loadMockData = () => {
      setLoading(true);
      // Simulate network delay
      setTimeout(() => {
        setDrinks(mockDrinks);
        setLoading(false);
      }, 500);
    };
    
    loadMockData();
  }, []);

  const handleAddDrink = async (values: Drink) => {
    try {
      console.log('Form values received:', values);
      
      // Ensure all required fields are present and properly formatted
      const drinkData = {
        id: Date.now(), // Generate a simple ID
        title: values.title || '',
        company_name: values.company_name || '',
        price: Number(values.price) || 0,
        volume: Number(values.volume) || 0,
        type: values.type || '',
        image: values.image || ''
      };
      
      console.log('Processed drink data:', drinkData);
      
      // Add to local state instead of API call
      setDrinks(prevDrinks => [...prevDrinks, drinkData]);
      
      notification.success({
        message: 'Success',
        description: 'Drink added successfully!',
      });
      return true;
    } catch (error) {
      console.error('Add drink error:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to add drink. Please check the console for details.',
      });
      return false;
    }
  };

  const handleEditDrink = async (values: Drink) => {
    try {
      // Update in local state instead of API call
      setDrinks(prevDrinks =>
        prevDrinks.map(drink =>
          drink.id === values.id ? { ...values } : drink
        )
      );
      
      notification.success({
        message: 'Success',
        description: 'Drink updated successfully!',
      });
      return true;
    } catch (error) {
      console.error('Edit drink error:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to update drink',
      });
      return false;
    }
  };

  const handleDeleteDrink = async (id: number) => {
    try {
      // Remove from local state instead of API call
      setDrinks(prevDrinks => prevDrinks.filter(drink => drink.id !== id));
      
      notification.success({
        message: 'Success',
        description: 'Drink deleted successfully!',
      });
    } catch (error) {
      console.error('Delete drink error:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to delete drink',
      });
    }
  };

  return {
    drinks,
    loading,
    handleAddDrink,
    handleEditDrink,
    handleDeleteDrink,
  };
};
