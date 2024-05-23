import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartData} from '../redux/selectors/selectors';
import logger from '../utilities/logger/logger';
import AllCartRender from '../components/AllCartRender';
import {CartData} from '../../type';
import MyCartFooter from './MyCartFooter';


interface Props {
  item: CartData;
}

const CartScreen: React.FC<Props> = () => {

  const cartData = useSelector(selectCartData);

  logger('My Card Data List', cartData);

  return (
    <View style={styles.container}>
      <AllCartRender item={cartData ?? null} />
      <MyCartFooter/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CartScreen;
