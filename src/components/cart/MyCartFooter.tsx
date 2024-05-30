import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import { cartItems } from '../../redux/reducers/cartslice/selectors/cartSelector';

import CheckBox from '@react-native-community/checkbox';
import { setAllItemsSelected } from '../../redux/reducers/cartslice/reducer/cartReducer';

const MyCartFooter: React.FC = () => {

  const dispatch = useDispatch();

  const cartData = useSelector(cartItems);

  const totalPrice = cartData.reduce((total, product) => {
    if (product.isSelected) {
      return total + product.totalOrderPrice;
    }
    return total;
  }, 0);

  const handleSelectAllChange = () => {
    const allChecked = cartData.every(item => item.isSelected);
    dispatch(setAllItemsSelected(!allChecked));
  };

  return (
    <View style={styles.container}>
      <CheckBox
        value={
          cartItems
            ? cartItems.length > 0 && cartData.every(item => item.isSelected)
            : false
        }
        onValueChange={handleSelectAllChange}
      />
      <Text style={styles.totalPriceText}>
        {totalPrice ? 'Unselect All' : 'Select All'}
      </Text>
      <Text style={styles.totalPriceText}>
        Sub Total Price: PhP {totalPrice.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-evenly',
  },
  totalPriceText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MyCartFooter;
