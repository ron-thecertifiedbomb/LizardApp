import {View, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';
import EmptyList from '../components/cart/EmptyList';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';

import useGetCartListHook from '../hooks/useGetCartListHook';

type RootStackParamList = {
  CartScree: {userId: string; cartScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const CartScreen: React.FC = () => {

  const route = useRoute<StoreScreenRouteProp>();

  const {userId, cartScreenHeaderTitle} = route.params;

  const { cartList } = useGetCartListHook(userId)


  // console.log(cartData)

  console.log('User Cart List Info fromuse GetCartListHook ', cartList)

  return (
    <View style={styles.container}>
      <Header title={cartScreenHeaderTitle} />
      {cartList && cartList.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <AllCartRender item={cartList ?? null} />
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
