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

  const totalPrice = useSelector(selectCartTotalPrice)

  // logger('My Cart Data List', cartData);
   logger('Cart Total Price on Cart Screen', totalPrice);
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
