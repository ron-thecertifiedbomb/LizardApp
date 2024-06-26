import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  CartItem, RootObject } from './type';
import CartQuantity from './CartQuantity';
import { formatPrice } from '../../utilities/helpers/lib';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { RootStackParamList } from '../navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { setIsSelected } from '../../redux/reducers/cartslice/reducer/cartReducer';
import { deleteItem } from '../../redux/reducers/cartslice/reducer/userCartListReducer';

interface Props {
  item: RootObject;
}

const CartCard: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (newValue: boolean) => {
    dispatch(setIsSelected({ itemId: item.orderId, isSelected: newValue }));
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleViewProduct = (productId: string) => {
    navigation.navigate('ProductPage', { productId: productId });
  };


  const handleDelete = (productId: string) => {
   dispatch(deleteItem({productId}));
  };

  return (
    <TouchableOpacity onPress={() => handleViewProduct(item.productId)}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.titleText}>{item.name}</Text>
          <View style={styles.secondRow}>
            <Text style={styles.priceText}>Price: {formatPrice(item.price)}</Text>
            <Text style={styles.priceText}>Stocks: {item.quantityOrdered}</Text>
            {/* <Text style={styles.quantityText}>Total Orders: {item.quantityOrdered}</Text> */}
          </View>
          <CartQuantity item={item} />
          <View style={styles.cardBottom}>
            {/* <CheckBox
              value={item.isSelected}
              onValueChange={handleCheckboxChange}
            /> */}
            <TouchableOpacity onPress={() => handleDelete(item.productId)}>
              <FontAwesomeIcon icon={faTrashAlt} size={20} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    width: '100%',
    padding: 10,

  },
  cardBody: {
    flex: 1,
  },
  secondRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',

  },
  titleText: {
    fontSize: 16,

    color: 'black',
  },
  priceText: {
    fontSize: 12,
    color: 'black',
  },
  quantityText: {
    fontSize: 12,
    color: 'gray',
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default CartCard;
