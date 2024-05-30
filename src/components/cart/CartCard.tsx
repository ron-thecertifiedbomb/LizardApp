import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CartData} from './type';
import CartQuantity from './CartQuantity';
import {formatPrice} from '../../utilities/helpers/lib';
import {useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {RootStackParamList} from '../navigation/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setIsSelected } from '../../redux/reducers/cartslice/reducer/cartReducer';
interface Props {
  item: CartData;
}

const CartCard: React.FC<Props> = ({item}) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (newValue: boolean) => {
    dispatch(setIsSelected({itemId: item.productId, isSelected: newValue}));
  };

  

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleViewProduct = (productId: string) => {
    navigation.navigate('ProductPage', {productId: productId});
  };

  const dateAdded = item.dateAdded
   const timeAdded = item.timeAdded

  console.log(timeAdded)

  return (
    <TouchableOpacity onPress={() => handleViewProduct(item._id)}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.titleText}> {item.name}</Text>
          <View style={styles.secondRow}>
            <Text style={styles.priceText}>
              Price: {formatPrice(item.price)}
            </Text>
            <Text style={styles.quantityText}>Stocks: {item.quantity}</Text>
          </View>
          <CartQuantity item={item} />
          <View style={styles.cardBottom}>
            <CheckBox
              value={item.isSelected}
              onValueChange={handleCheckboxChange}
            />
            <FontAwesomeIcon icon={faDeleteLeft} size={20} color="grey" />
            
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    width: '100%',
    padding: 10,
  },

  cardBody: {
    flex: 1,
  },
  secondRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  priceText: {
    fontSize: 16,

    color: 'black',
  },
  quantityText: {
    fontSize: 12,
    color: 'gray',
  },

  colorText: {
    fontSize: 14,
    color: 'gray',
  },
  cardBottom: {
    fontSize: 14,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default CartCard;
