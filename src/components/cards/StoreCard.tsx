import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';

import { generateCustomOrderId } from '../../utilities/helpers/lib';
import { IProduct } from '../../types/products/type';
import { addedToCart } from '../../redux/reducers/cartslice/reducer/cartReducer';
import { selectUserId } from '../../redux/reducers/userslice/selectors/selector';
import { RootStackParamList } from '../navigation/types';

interface Props {
  item: IProduct;
}

const StoreCard: React.FC<Props> = ({item}) => {
  const userID = useSelector(selectUserId);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const handleAddToCart = () => {

    console.log('imageURLS ', item.imageUrls[0])

    const cartPayload: IProduct = {

      ownerId: userID,
      orderId: generateCustomOrderId(userID, item._id),
      productId: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      quantityOrdered: 1,
      isSelected: false,
      dateAdded: new Date().toLocaleDateString(),
      timeAdded: new Date().toLocaleTimeString(),
      
    };

    dispatch(addedToCart(cartPayload));
  };

  const handleViewProduct = (productId: string) => {
    navigation.navigate('ProductPage', {productId: productId});
  };
  return (
    <TouchableOpacity onPress={() => handleViewProduct(item._id)}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: item.imageUrls[0],
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.priceText}>Price {item.price}</Text>
          <View style={styles.quantityRow}>
            <Text style={styles.quantityText}>Stocks: {item.quantity}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart()}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    width: 165,
    height: 180,
  },
  cardBody: {
    flex: 1,
    padding: 8,
  },

  quantityRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },

  priceText: {
    fontSize: 10,
    color: 'black',
  },
  quantityText: {
    fontSize: 10,
    color: 'gray',
  },

  button: {
    backgroundColor: '#007BFF',
    padding: 2,
    borderRadius: 8,
    width: '40%',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 8,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});

export default StoreCard;
function getFormattedDate() {
  throw new Error('Function not implemented.');
}
