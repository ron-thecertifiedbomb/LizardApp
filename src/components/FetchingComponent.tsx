import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { RootStackParamList } from './navigation/types'; // Import types
import LoadingIndicator from './LoadingIndicator';
import useGetAllProductsHooks from '../hooks/useGetAllProductsHook';

const FetchingComponent = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'DrawerNavigator'>>(); // Use StackNavigationProp
  
  const { isLoading, isError, data, error, refetch } = useGetAllProductsHooks();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [refetch]);

  useEffect(() => {
    if (!isLoading && data) {
      navigation.replace('DrawerNavigator');
    }
  }, [isLoading, data, navigation]);

  const handleRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error('Error while refreshing:', error);
    }
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error?.message}</Text>
        <Button title="Retry" onPress={handleRefresh} />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FetchingComponent;
