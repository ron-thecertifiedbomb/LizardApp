import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { SingleProductData } from '../redux/selectors/selectors';

const Card: React.FC = () => {
  const product = useSelector(SingleProductData);

  return (
    
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.titleText}>{product?.brand}</Text>
          <Text style={styles.categoryText}>Category: {product?.category}</Text>
          <Text style={styles.priceText}>Price: ${product?.price}</Text>
          <Text style={styles.quantityText}>Quantity: {product?.quantity}</Text>
          <Text style={styles.specificationsTitle}>Specifications:</Text>
          {product?.specifications ? (
            Object.entries(product.specifications).map(([key, value]) => (
              <Text key={key} style={styles.specificationText}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </Text>
            ))
          ) : (
            <Text>No specifications available</Text>
          )} 
          <Text style={styles.includedItemsTitle}>Included Items:</Text>
          {product?.includedItems && product.includedItems.map((item, index) => (
            <Text key={index} style={styles.includedItemText}>
              {item}
            </Text>
          ))} 
          <Text style={styles.availableColorsTitle}>Available Colors:</Text>
          {product?.availableColors && product.availableColors.map((color, index) => (
            <Text key={index} style={styles.colorText}>
              {color}
            </Text>
          ))}
        </View>
      </View>

  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 25,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
    alignSelf: 'center',
  },
  profilePicture: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  cardBody: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  quantityText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 16,
  },
  specificationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  specificationText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 2,
  },
  includedItemsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 16,
    marginBottom: 4,
  },
  includedItemText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 2,
  },
  availableColorsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 16,
    marginBottom: 4,
  },
  colorText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 2,
  },
});

export default Card;
