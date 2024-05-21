import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IProduct, RootStackParamList} from '../../type';
import { RouteProp, useNavigation } from '@react-navigation/native';

interface Props {
  item: IProduct;
}


const AllProductsCard: React.FC<Props> = ({item}) => {

  const navigation = useNavigation<RootStackParamList>();


  return (
    <TouchableOpacity onPress={() => (navigation.navigate('ProductPage',  {productId:  item._id,}))}>
      <View style={styles.card}>
       
        {/* <Image source={{uri: item.imageUrl}} style={styles.profilePicture} /> */}
        <View style={styles.cardBody}>
          <Text style={styles.titleText}> {item.brand}</Text>
          <Text style={styles.categoryText}>{item.category}</Text>
          <Text style={styles.priceText}>Price {item.price}</Text>
          <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
          <Text style={styles.specificationsTitle}>Specifications:</Text>
          {item.specifications ? (
            Object.entries(item.specifications).map(([key, value]) => (
              <Text key={key} style={styles.specificationText}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </Text>
            ))
          ) : (
            <Text>No specifications available</Text>
          )}
          <Text style={styles.includedItemsTitle}>Included Items:</Text>
          {item.includedItems &&
            item.includedItems.map((includedItem, index) => (
              <Text key={index} style={styles.includedItemText}>
                {includedItem}
              </Text>
            ))}
          <Text style={styles.availableColorsTitle}>Available Colors:</Text>
          {item.availableColors &&
            item.availableColors.map((color, index) => (
              <Text key={index} style={styles.colorText}>
                {color}
              </Text>
            ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    width: 500,
  },
  profilePicture: {
    width: '100%',
    height: 300,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  cardBody: {
    width: '100%',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryText: {
    fontSize: 16,
    color: 'gray',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  quantityText: {
    fontSize: 16,
    color: 'gray',
  },
  specificationsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  specificationText: {
    fontSize: 14,
    color: 'gray',
  },
  includedItemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  includedItemText: {
    fontSize: 14,
    color: 'gray',
  },
  availableColorsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  colorText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AllProductsCard
  
