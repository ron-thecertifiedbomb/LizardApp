import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addedToCart} from '../redux/reducers/cartReducer';
import {CartData} from './cart/type';
import {date, time} from '../utilities/helpers/lib';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './navigation/types';
import {IProduct} from '../types/Products/type';

interface Props {
  item: IProduct;
}

const StoreCard: React.FC<Props> = ({item}) => {

  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAddToCart = () => {
    const newItem = {
      _id: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      totalOrderPrice: item.price,
      quantityOrdered: 1,
      isSelected: false,
      dateAdded: date(),
      timeAdded: time(),
    };
    dispatch(addedToCart(newItem));
  };

  const handleViewProduct = (productId: string) => {
    navigation.navigate('ProductPage', {productId: productId});
  };

  return (
    <TouchableOpacity onPress={() => handleViewProduct(item._id)}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: item?.imagelink_square,
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.priceText}>Price {item.price}</Text>
          <View style={styles.quantityRow}>
            <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart()}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    width: 180,
    height: 200,
  },
  cardBody: {
    flex: 1,
    padding: 8,
  },

  quantityRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },

  priceText: {
    fontSize: 10,
    color: 'black',
  },
  quantityText: {
    fontSize: 10,
    color: 'gray',
  },

  button: {
    backgroundColor: '#007BFF',
    padding: 2,
    borderRadius: 8,
    width: '40%', 
  },

  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 8,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});

export default StoreCard;
function getFormattedDate() {
  throw new Error('Function not implemented.');
}

