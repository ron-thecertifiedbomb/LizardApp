import React from 'react';
import {useSelector} from 'react-redux';

import {StyleSheet, Text, View} from 'react-native';
import { selectCartTotalPrice } from '../../redux/selectors/selectors';
import logger from '../../utilities/logger/logger';

const MyCartFooter: React.FC = () => {

  const totalPrice = useSelector(selectCartTotalPrice);

  // logger('Total Price',totalPrice )
  
  return (
    <View style={styles.container}>
      <Text style={styles.totalPriceText}>
        Total Price: PhP {totalPrice}
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
