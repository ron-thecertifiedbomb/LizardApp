import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import LoadingScreen from './LoadingScreen';
import {RouteProp, useRoute} from '@react-navigation/native';
import Card from '../components/Card';
import { singleProductData } from '../redux/reducers/getAllProductsReducer';
import { RootState } from '../redux/store/store';

type RootStackParamList = {
  ProductPage: {productId: string};
};

type SingleProductScreenRouteProp = RouteProp<RootStackParamList>;

const SingleProductScreen: React.FC = () => {

  const route = useRoute<SingleProductScreenRouteProp>();
  const {productId} = route.params;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(singleProductData(productId));
  }, [dispatch]); 
  
  // const { isLoading, isError, error } = useGetSingleProduct(productId);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  // if (isError) {
  //   const errorMessage =
  //     error instanceof Error ? error.message : 'An unknown error occurred';
  //   return <Text >Error: {errorMessage}</Text>;
  // }

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
