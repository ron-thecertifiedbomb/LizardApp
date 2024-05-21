import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import {singleProductData} from '../redux/reducers/getProductsReducer'; // Ensure this path is correct
import LoadingScreen from './LoadingScreen';
import {RouteProp, useRoute} from '@react-navigation/native';
import Card from '../components/Card';

type RootStackParamList = {
  ProductPage: {productId: string};
};

type SingleProductScreenRouteProp = RouteProp<RootStackParamList>;

const SingleProductScreen: React.FC<RootStackParamList> = () => {

  const route = useRoute<SingleProductScreenRouteProp>();
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
    <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});

export default SingleProductScreen;
