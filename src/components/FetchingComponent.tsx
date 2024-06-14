import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation/types';
import Logo from './logo/Logo';
import useGetUserInfoHook from '../hooks/useGetUserInfoHook';

const FetchingComponent = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'DrawerNavigator'>>();

  const { allProductsData, allProductsRefetch, cartListData, cartListRefetch, isLoading } = useGetUserInfoHook();

  useEffect(() => { 
    const fetchData = async () => {
      try {
        await allProductsRefetch();
        await cartListRefetch();
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [allProductsRefetch, cartListRefetch]);

  const handleRefresh = async () => {
    try {
      await allProductsRefetch();
      await cartListRefetch();
    } catch (error) {
      console.error('Error while refreshing:', error);
    }
  };

  useEffect(() => {
    if (!isLoading && allProductsData && cartListData) {
      navigation.replace('DrawerNavigator');
    }
  }, [isLoading, allProductsData, cartListData, navigation]);

  if (!allProductsData || !cartListData) {
    return <Logo />;
  }

  return (
    <View style={styles.centered}>
      <Button title="Refresh" onPress={handleRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FetchingComponent;
