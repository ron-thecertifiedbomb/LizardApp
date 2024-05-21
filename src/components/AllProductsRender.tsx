import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AllProductsCard from './AllProductCards';
import { IProduct } from '../../type';


interface Props {
  item: IProduct[] | null;
}

const AllProductsRender: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      {item ? (
        <FlatList
          data={item}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <AllProductsCard item={item} />}
        />
      ) : (
        <Text>No items available</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllProductsRender;
