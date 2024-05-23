import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProductForm from '../components/EditProductForm';
import CustomModal from '../components/Modal';
import { useDispatch } from 'react-redux';
import { singleProductData } from '../redux/reducers/getProductsReducer';
import { RouteProp, useRoute } from '@react-navigation/native';


type RootStackParamList = {
  EditProductForm: {productId: string};
};

type SingleProductScreenRouteProp = RouteProp<RootStackParamList>;

const EditProductScreen = () => {
  
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
    <ProductForm  />
    <CustomModal />
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
