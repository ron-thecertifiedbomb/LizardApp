import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CartData} from '../../type';


interface Props {
  item: CartData;
}

const CartCard: React.FC<Props> = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.titleText}> {item.name}</Text>
          <Text style={styles.priceText}>Price {item.price}</Text>
          <Text style={styles.quantityText}>Stocks: {item.quantity}</Text>
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
    height: 120,
    padding: 10,
  },

  cardBody: {
    flex: 1,
  },

  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
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

  colorText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CartCard;
