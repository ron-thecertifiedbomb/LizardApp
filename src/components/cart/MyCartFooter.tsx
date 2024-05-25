import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import { selectCartData } from '../../redux/selectors/selectors';


const MyCartFooter: React.FC = () => {

  const product = useSelector(selectCartData);
  const totalPrice = product.reduce((total, item) => total + item.totalOrderPrice, 0);

  
 
  return (
    <View style={styles.container}>
      <Text style={styles.totalPriceText}>
        Total Price: PhP {totalPrice.toFixed(2)}
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
