import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CartData} from './type';
import CartQuantity from './CartQuantity';
import {formatPrice} from '../../utilities/helpers/lib';
import logger from '../../utilities/logger/logger';

interface Props {
  item: CartData;
}

const CartCard: React.FC<Props> = ({item}) => {


  // logger('Product ID from the card component', item._id )
  // logger('Product quantity order  from the card component',  item.quantity )


  
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.titleText}> {item.name}</Text>
          <View style={styles.secondRow}>
            <Text style={styles.priceText}>
              Price: {formatPrice(item.price)}
            </Text>
            <Text style={styles.quantityText}>Stocks: {item.quantity}</Text>
          </View>
          <CartQuantity item={item} />
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    width: '100%',
    height: 160,
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
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  priceText: {
    fontSize: 16,

    color: 'black',
  },
  quantityText: {
    fontSize: 12,
    color: 'gray',
  },

  colorText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CartCard;
