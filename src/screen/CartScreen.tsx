import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';
import EmptyList from '../components/cart/EmptyList';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {cartListItems} from '../redux/reducers/cartslice/selectors/cartSelector';
import Container from '../components/container/Container';

type RootStackParamList = {
  CartScreen: {userId: string; cartScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const CartScreen: React.FC = () => {
  const route = useRoute<StoreScreenRouteProp>();
  const {cartScreenHeaderTitle} = route.params;
  const data = useSelector(cartListItems);

  return (
    <Container style={styles.container}>
      <Header title={cartScreenHeaderTitle} />
      {data && data.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <AllCartRender item={data} />
          <MyCartFooter />
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',

  },
});

export default CartScreen;
