import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

import {RouteProp, useNavigation} from '@react-navigation/native';
import logger from '../utilities/logger/logger';
import {useDispatch} from 'react-redux';
import {myCartData} from '../redux/reducers/cartReducer';
import {CartData} from './cart/type';

interface Props {
  item: CartData;
}

const AllProductsCard: React.FC<Props> = ({item}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      _id: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity, // Keep quantity unchanged
      totalOrderPrice: item.price, // Initial total order price is just the item price
      quantityOrdered: 1, // Set the initial number of times ordered to
    };

    dispatch(myCartData(newItem));
  };

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.titleText}> {item.name}</Text>
          <Text style={styles.priceText}>Price {item.price}</Text>
          <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddToCart()}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
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
    padding: 10,
  },
  profilePicture: {
    width: '100%',
    height: 400,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  cardBody: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryTextLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryText: {
    fontSize: 16,
    color: 'gray',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  quantityText: {
    fontSize: 16,
    color: 'gray',
  },
  specificationsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  specificationText: {
    fontSize: 14,
    color: 'gray',
  },
  includedItemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  includedItemText: {
    fontSize: 14,
    color: 'gray',
  },
  availableColorsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  colorText: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    backgroundColor: '#007BFF', // Change to desired background color
    padding: 5,
    borderRadius: 8,
    width: '40%', // Add border radius
  },
  buttonText: {
    color: '#fff', // Change to desired text color
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});

export default AllProductsCard;
