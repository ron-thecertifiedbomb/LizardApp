import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCartData} from '../redux/selectors/selectors';
import logger from '../utilities/logger/logger';
import MyCartFooter from '../components/cart/MyCartFooter';
import AllCartRender from '../components/cart/AllCartRender';
import {CartData} from '../components/cart/type';
import { setAllItemsSelected } from '../redux/reducers/cartReducer';

interface Props {
  item: CartData;
}

const CartScreen: React.FC<Props> = () => {

  const dispatch = useDispatch();
  
  const cartData = useSelector(selectCartData);

  const handleSelectAllChange = () => {
    const allChecked = cartData.every(item => item.isSelected); // Check if all items are already checked
    dispatch(setAllItemsSelected(!allChecked)); // Dispatch action to toggle all items' isSelected property
  };


  // const findProductById = (productId: string) => {
  //   return cartData?.find(product => product._id === productId);
  // };

  // const productIdToSearch = '6650011ab3f82d2c9af555f3'

  // const productItem = findProductById(productIdToSearch)

  // const unselectedProducts = cartData.filter(product => !product.isSelected);

  // const unselectedProductsId = unselectedProducts

  // const unselectedProductsList = cartData?.map(product => product._id);

  // const productItemNotSelected = unselectedProductsId.length


  // logger('Unselected Product List ', unselectedProductsList);
  // logger('My Cart Order Product Details from CartScreen ', cartData);

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


