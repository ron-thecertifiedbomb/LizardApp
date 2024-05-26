import {Text, View} from 'react-native';
import AllProductsRender from '../components/AllProductsRender';
import {useSelector} from 'react-redux';
import {AllProductsData} from '../redux/selectors/selectors';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';

type RootStackParamList = {
  StoreScreen: {userId: string; storeScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const StoreScreen: React.FC =() => {
  const products = useSelector(AllProductsData);

  const route = useRoute<StoreScreenRouteProp>();
  const {userId, storeScreenHeaderTitle} = route.params;

  return (
    <View style={{flex: 1}}>
      <Header title={storeScreenHeaderTitle} />
      <AllProductsRender item={products ?? null} />
    </View>
  );
}

export default StoreScreen
