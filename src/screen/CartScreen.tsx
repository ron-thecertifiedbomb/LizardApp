import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';
import EmptyList from '../components/cart/EmptyList';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {cartListItems} from '../redux/reducers/cartslice/selectors/cartSelector';

import useGetCartListHook from '../hooks/useGetCartListHook';
import logger from '../utilities/logger/logger';

type RootStackParamList = {
  CartScreen: {userId: string; cartScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const CartScreen: React.FC = () => {
  const route = useRoute<StoreScreenRouteProp>();

  const {cartScreenHeaderTitle} = route.params;

  const cartItems = useSelector(cartListItems);

  logger('Cart List from APO listener', cartItems);

  return (
    <View style={styles.container}>
      <Header title={cartScreenHeaderTitle} />
      {cartItems && cartItems.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <AllCartRender item={cartItems} />
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
