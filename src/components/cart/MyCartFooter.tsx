import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {selectCartData} from '../../redux/selectors/selectors';
import {setAllItemsSelected} from '../../redux/reducers/cartReducer';
import CheckBox from '@react-native-community/checkbox';

const MyCartFooter: React.FC = () => {

  const dispatch = useDispatch();

  const products = useSelector(selectCartData);

  const totalPrice = products.reduce((total, product) => {
    if (product.isSelected) {
      return total + product.totalOrderPrice;
    }
    return total;
  }, 0);

  const handleSelectAllChange = () => {
    const allChecked = products.every(item => item.isSelected);
    dispatch(setAllItemsSelected(!allChecked));
  };

  return (
    <View style={styles.container}>
      <CheckBox
        value={
          products
            ? products.length > 0 && products.every(item => item.isSelected)
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
