import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CartData } from '../../type';



interface Props {
  item: CartData;
}

const CartQuantity: React.FC<Props> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
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

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={handleDecrement} />
        <TextInput
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
          style={styles.quantityInput}
        />
        <Button title="+" onPress={handleIncrement} />
      </View>
      <Text style={styles.totalPrice}>Total Price: ${item.price * quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    width: 40,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default CartQuantity;
