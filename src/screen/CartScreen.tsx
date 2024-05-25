import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartData} from '../redux/selectors/selectors';
import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';


const CartScreen: React.FC = () => {
  const cartData = useSelector(selectCartData);

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
