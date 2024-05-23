import {Text, View} from 'react-native';

import AllProductsRender from '../components/AllProductsRender';
import {useSelector} from 'react-redux';
import {AllProductsData} from '../redux/selectors/selectors';
import logger from '../utilities/logger/logger';

export default function StoreScreen() {
  const products = useSelector(AllProductsData);

  // logger('All Products from Redux', products);

  return (
    <View style={{flex: 1}}>
      <AllProductsRender item={products ?? null} />
    </View>
  );
}
