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
import {useDispatch, useSelector} from 'react-redux';
import {calculateTotalPrice} from '../../utilities/helpers/lib';
import logger from '../../utilities/logger/logger';
import { selectCartData } from '../../redux/selectors/selectors';

interface Props {
  item: CartData;
}

const CartQuantity: React.FC<Props> = ({item}) => {

  const cartData = useSelector(selectCartData);

  logger('My Cart Order Product Details from CartQuantity ', cartData);


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

  logger('Product ID ', item._id);

  logger('State Stocks from API ', item.quantity);
  // logger('State Price ', item.price);
  logger('State TotalPrice ', totalPrice);





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

