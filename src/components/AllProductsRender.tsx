import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {IProduct} from '../types/Products/type';
import StoreCard from './MyStoreCard';

interface Props {

  item: IProduct[] | null;
}
const AllProductsRender: React.FC<Props> = ({item}) => {

  return (
    <View style={styles.container}>
      {item ? (
        <FlatList
          data={item}
          keyExtractor={item => item._id}
          renderItem={({item}) => <StoreCard item={item} />}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 1, width: 10}} />}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
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
    padding: 15,
    justifyContent: 'center',

    alignContent: 'center',
    display: 'flex',
  },
});

export default AllProductsRender;
