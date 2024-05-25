import {Text, View} from 'react-native';

import AllProductsRender from '../components/AllProductsRender';
import {useSelector} from 'react-redux';
import {AllProductsData} from '../redux/selectors/selectors';
import logger from '../utilities/logger/logger';

export default function StoreScreen() {
  const products = useSelector(AllProductsData);

  logger('All Products from Redux', products);

  const categories = products?.map(product => product.category);

  const uniqueCategories = [...new Set(categories)];
  const productIDs = products?.map(product => product._id);

  const specificationsArray = products?.[0]?.specifications
    ? Object.keys(products[0].specifications).map(key => ({
        id: key,
        value: products[0].specifications,
      }))
    : [];

  
  const findProductById = (productId: string) => {
    return products?.find(product => product._id === productId);
  };

  const productIdToSearch = '6650011ab3f82d2c9af555f3';
  const product = findProductById(productIdToSearch);

  if (product) {
    const specifications = product.specifications;
    // console.log('Specifications:', specifications);
  } else {
    // console.log('Product not found.');
  }

  // logger(' Product Sepcification', specificationsArray);
  // logger('All Product Categories', uniqueCategories);
  // logger('All Product IDs', productIDs);

  return (
    <View style={{flex: 1}}>
      <AllProductsRender item={products ?? null} />
    </View>
  );
}
