import {View} from 'react-native';
import AllProductsRender from '../components/AllProductsRender';
import {useSelector} from 'react-redux';

import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import { allProducts } from '../redux/reducers/productslice/selectors/selector';

type RootStackParamList = {
  StoreScreen: {userId: string; storeScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const StoreScreen: React.FC =() => {
  
  const products = useSelector(allProducts);

  const route = useRoute<StoreScreenRouteProp>();

  const {userId, storeScreenHeaderTitle} = route.params;

  console.log('UserID Store Screen', userId)

  return (

    <View style={{flex: 1}}>
      <Header title={storeScreenHeaderTitle} />
      <AllProductsRender item={products ?? null} />
    </View>
  );
}

export default StoreScreen
