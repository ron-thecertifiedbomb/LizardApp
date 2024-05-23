import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartData} from '../redux/selectors/selectors';
import logger from '../utilities/logger/logger';

export default function CartScreen() {
  
  const cartData = useSelector(selectCartData);

  logger('My Card Data List', cartData.length);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cart Screen</Text>
    </View>
  );
}
