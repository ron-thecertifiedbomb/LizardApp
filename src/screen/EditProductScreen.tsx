import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProductForm from '../components/EditProductForm';
import { useDispatch } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';
import { singleProductData } from '../redux/reducers/productslice/reducer/getAllProductsReducer';



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
