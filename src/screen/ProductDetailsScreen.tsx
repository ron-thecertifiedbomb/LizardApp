import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {allProducts} from '../redux/reducers/productslice/selectors/selector';
import Header from '../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

type RootStackParamList = {
  ProductPage: {productId: string};
};

type SingleProductScreenRouteProp = RouteProp<RootStackParamList>;

const ProductDetailsScreen: React.FC = () => {
  const route = useRoute<SingleProductScreenRouteProp>();

  const {productId} = route.params;

  const products = useSelector(allProducts);
  const productDetails = products?.find(product => product._id === productId);

  return (
    <View style={styles.container}>
      <Header
        title={productDetails?.name}
        icon={<FontAwesomeIcon icon={faArrowLeft} size={20} color={'grey'} />}
      />
      <Image
        style={styles.image}
        source={{
          uri: productDetails?.imageUrls[0],
        }}
      />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Specifications:</Text>
        {productDetails &&
          productDetails.specifications &&
          Object.entries(productDetails.specifications).map(([key, value]) => (
            <Text key={key} style={styles.textstyle}>
              {`${key}: ${value}`}
            </Text>
          ))}
        <Text style={styles.heading}>Included Items:</Text>
        {productDetails &&
          productDetails.includedItems &&
          Object.entries(productDetails.includedItems).map(([key, value]) => (
            <Text key={key} style={styles.textstyle}>
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
  heading: {
    fontSize: 14,
    marginVertical: 5,
  },
  textstyle: {
    fontSize: 12,
    marginVertical: 5,
  },
});

export default ProductDetailsScreen;
