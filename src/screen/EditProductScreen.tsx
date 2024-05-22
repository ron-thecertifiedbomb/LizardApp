import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoadingScreen from './LoadingScreen';
import {RouteProp, useRoute} from '@react-navigation/native';
import Card from '../components/Card';
import useEditProduct from '../hooks/useEditProductHooks';
import { isError } from 'react-query';
import { useSelector } from 'react-redux';
import { SingleProductData } from '../redux/selectors/selectors';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import ProductForm from '../components/EditProductForm';

type RootStackParamList = {
  EditProductPage: {productId: string};

};

type EditProductScreenRouteProp = RouteProp<RootStackParamList>;

const EditProductScreen = () => {

  const route = useRoute<EditProductScreenRouteProp>();
  const {productId} = route.params;

  const { isLoading, isError, error } = useGetSingleProduct(productId);


  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return <Text >Error: {errorMessage}</Text>;
  }

  return (
    <View style={styles.container}>
    <ProductForm  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});

export default EditProductScreen;
