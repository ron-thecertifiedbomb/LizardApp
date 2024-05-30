import {View, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';
import EmptyList from '../components/cart/EmptyList';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import { cartItems } from '../redux/reducers/cartslice/selectors/cartSelector';

type RootStackParamList = {
  CartScree: {userId: string; cartScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const CartScreen: React.FC = () => {

  const cartData = useSelector(cartItems);

  const route = useRoute<StoreScreenRouteProp>();
  
  const {userId, cartScreenHeaderTitle} = route.params;

  console.log(userId)

  return (
    <View style={styles.container}>
      <Header title={cartScreenHeaderTitle} />
      {cartData && cartData.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <AllCartRender item={cartData ?? null} />
          <MyCartFooter />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;
