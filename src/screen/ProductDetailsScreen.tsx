import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import Card from '../components/Card';
import logger from '../utilities/logger/logger';
import {AllProductsData} from '../redux/selectors/selectors';
import {useSelector} from 'react-redux';

type RootStackParamList = {
  ProductPage: {productId: string};
};

type SingleProductScreenRouteProp = RouteProp<RootStackParamList>;

const ProductDetailsScreen: React.FC = () => {
  const route = useRoute<SingleProductScreenRouteProp>();
  const {productId} = route.params;

  const products = useSelector(AllProductsData);

  logger('Product ID', productId);

  const productDetails = products?.find(product => product._id === productId);

  logger('Product Details', productDetails?.imagelink_portrait);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: productDetails?.imagelink_square,
        }}
      />
       <View style={styles.subContainer}>
      <Text style={styles.nameText}>{productDetails?.name}</Text>
      {productDetails &&
        productDetails.specifications &&
        Object.entries(productDetails.specifications).map(([key, value]) => (
          <Text key={key} style={styles.specificationText}>
            {`${key}: ${value}`}
          </Text>
        ))}
      {productDetails &&
        productDetails.includedItems &&
        Object.entries(productDetails.includedItems).map(([key, value]) => (
          <Text key={key} style={styles.specificationText}>
            {`${value}`}
          </Text>
        ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  subContainer: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  nameText: {
    fontSize: 16,
    marginVertical: 5,
  },
  specificationText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ProductDetailsScreen;
