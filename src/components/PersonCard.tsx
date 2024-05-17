import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface User {
  name: string;
  description: string;
  imagelink_square: string;
  imagelink_portrait: string;
}

interface Props {
  item: User;
}

const Card: React.FC<Props> = ({ item }) => {

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imagelink_square }} style={styles.profilePicture} />
      <View style={styles.cardBody}>
      <Text style={styles.titleText}>{item.name}</Text>
      <Text style={styles.descriptionText}>Description: {item.description}</Text>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,

    padding: 16,
    flexDirection: 'column',

  },
  profilePicture: {
    width:  '100%',
    height: 300,
    borderRadius: 25,
    resizeMode: 'cover',
  
  },
  cardBody: {
  flex: 1,
  paddingTop: 10,
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 10,
    
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Change the color as needed
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray', // Example color, adjust as needed
  },
});

export default Card;
