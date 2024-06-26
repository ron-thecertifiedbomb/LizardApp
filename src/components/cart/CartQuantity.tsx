import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {RootObject} from './type';
import {useDispatch} from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../redux/reducers/cartslice/reducer/cartReducer';


interface Props {
  item: RootObject;
}

const CartQuantity: React.FC<Props> = ({item}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (item.quantityOrdered < item.quantityOrdered) {
      dispatch(incrementQuantity(item.productId));
    }
  };

  const handleDecrement = () => {
    if (item.quantityOrdered > 1) {
      dispatch(decrementQuantity(item.productId));
    }
  };

  const handleQuantityChange = (text: string) => {
    const value = parseInt(text);
    if (!isNaN(value) && value >= 1 && value <= item.quantityOrdered) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          value={item.quantityOrdered.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
          style={styles.quantityInput}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>
        {/* Total Price: PhP {item.totalOrderPrice} */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 35,
    flexDirection: 'row',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    width: 30,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 15,
  },
  buttonContainer: {
    display: 'flex',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignContent: 'center',
    width: 40,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
  },
});

export default CartQuantity;

function dispatch(arg0: {payload: string; type: 'mycart/incrementQuantity'}) {
  throw new Error('Function not implemented.');
}
