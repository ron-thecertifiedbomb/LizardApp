import React from 'react';
import { View, Text } from 'react-native';
import { useMutation } from 'react-query';
import CoffeeFormTwo from '../components/CoffeeFormTwo';

const CoffeePage: React.FC = () => {
  const addCoffeeMutation = useMutation<any, Error, any>(async (coffeeData) => {
    const response = await fetch('https://nextjs-server-rho.vercel.app/api/addNewData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coffeeData),
    });
    if (!response.ok) {
      throw new Error('Failed to add coffee');
    }
    return response.json();
  });

  const handleSubmit = async (coffeeData: any) => {
    try {
      const data = await addCoffeeMutation.mutateAsync(coffeeData);
      console.log(data);
    } catch (error) {
      console.error('Error adding coffee:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Create New Coffee</Text>
      <CoffeeFormTwo onSubmit={handleSubmit} />
    </View>
  );
};

export default CoffeePage;
