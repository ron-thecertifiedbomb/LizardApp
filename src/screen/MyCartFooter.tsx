import React from 'react';
import {useSelector} from 'react-redux';
import {selectCartData} from '../redux/selectors/selectors';
import {StyleSheet, Text, View} from 'react-native';

const MyCartFooter: React.FC = () => {

  const cartData = useSelector(selectCartData);
  
  let totalPrice = 0;
  cartData.forEach(item => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.totalPriceText}>
        Total Price: $ {totalPrice.toFixed(2)}
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
