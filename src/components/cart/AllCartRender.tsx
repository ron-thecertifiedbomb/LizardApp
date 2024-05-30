import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CartCard from './CartCard';
import {CartData} from './type';

interface Props {
  item: CartData[] | null;
}

const AllCartRender: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      {item ? (
        <FlatList
          data={item}
          keyExtractor={item => item.productId}
          renderItem={({item}) => <CartCard item={item} />}
        />
      ) : (
        <Text>No items available</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
});

export default AllCartRender;
