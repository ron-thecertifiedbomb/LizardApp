import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import AllProductsRender from '../components/AllProductsRender';
import useGetAllProductsHooks from '../hooks/useGetAllProductsHook';
import { useSelector } from 'react-redux';
import { AllProductsData } from '../redux/selectors/selectors';

export default function AllProductsScreen() {
  const { isLoading, isError, data, error, refetch } = useGetAllProductsHooks();


  console.log('First Fetch fo All Products from the Server', data)

  const handleRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error('Error while refreshing:', error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error: {error?.message}</Text>
        <Button title="Retry" onPress={handleRefresh} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AllProductsRender item={data ?? null} />
    </View>
  );
}
