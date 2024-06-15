import {StyleSheet, View} from 'react-native';
import AllProductsRender from '../components/AllProductsRender';
import {useSelector} from 'react-redux';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {allProducts} from '../redux/reducers/productslice/selectors/selector';
import Hero from '../components/hero/Hero';
import Carousel from '../components/carousel/Carousel';
import Container from '../components/container/Container';
import { images } from '../../_mockData/images';
type RootStackParamList = {
  StoreScreen: {userId: string; storeScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

const StoreScreen: React.FC = () => {

  const products = useSelector(allProducts);
  const route = useRoute<StoreScreenRouteProp>();
  const {storeScreenHeaderTitle} = route.params;


  console.log('all product', products);


  return (
    <Container style={styles.container}>
      <Header title={storeScreenHeaderTitle} />
      {/* <Carousel
      images={images}
      height={350}
      horizontal={true}
      dotStyle={{ width: 5, height: 10 }}
      dotSpacing={10}
      imagesStyles={{ resizeMode: 'cover' }}
      dotColor="#FF0000"
      activeDashSize={30}
      animations={['scale']}
      dotPosition="bottom"
    /> */}

      <AllProductsRender item={products ?? null} />
      </Container>
  );
};



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',

  },
});

export default StoreScreen;
