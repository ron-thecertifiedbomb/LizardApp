import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { selectCartData } from '../../redux/selectors/selectors';
import { CartData } from './type';
import { setAllItemsSelected } from '../../redux/reducers/cartReducer';
import CheckBox from '@react-native-community/checkbox';

interface Props {
  item: CartData[] | null;
}

const MyCartFooter: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const product = useSelector(selectCartData);

  const totalPrice = product.reduce(
    (total, item) => total + item.totalOrderPrice,
    0,
  );

  const handleSelectAllChange = () => {
    if (item && Array.isArray(item)) {
      const allChecked = item.every(item => item.isSelected); 
      dispatch(setAllItemsSelected(!allChecked)); 
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        value={item && Array.isArray(item) ? item.length > 0 && item.every(item => item.isSelected) : false}
        onValueChange={handleSelectAllChange}
      />
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
