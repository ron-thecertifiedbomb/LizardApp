import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartData} from './type';
import {myCartTotalPrice} from '../../redux/reducers/cartReducer';
import {useDispatch} from 'react-redux';
import {calculateTotalPrice} from '../../utilities/helpers/lib';

interface Props {
  item: CartData;
}

const CartQuantity: React.FC<Props> = ({item}) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < item.quantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (text: string) => {
    const value = parseInt(text);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const totalPrice = calculateTotalPrice(item.price, quantity);

  useEffect(() => {
    dispatch(myCartTotalPrice(totalPrice));
  }, [totalPrice]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          value={quantity.toString()}
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
      <Text style={styles.totalPrice}>Total Price: PhP {totalPrice}</Text>
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
function dispatch(arg0: {payload: CartData; type: 'mycart/myCartData'}) {
  throw new Error('Function not implemented.');
}
