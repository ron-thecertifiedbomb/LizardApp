import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartData, selectCartTotalPrice} from '../redux/selectors/selectors';
import logger from '../utilities/logger/logger';

import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';
import {CartData} from '../components/cart/type';

interface Props {
  item: CartData;
}

const CartScreen: React.FC<Props> = () => {
  const cartData = useSelector(selectCartData);

  logger('My Cart Order Product Details from CartScreen ', cartData);


  const quantity = cartData[0]?.quantity;
  const price = cartData[0]?.price;
  
  // logger('State Stocks ', quantity);
  // logger('State Price ', price);




  return (
    <View style={styles.container}>
      <AllCartRender item={cartData ?? null} />
      <MyCartFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default CartScreen;
