import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AllProductsCard from './AllProductsCards';
import {IProduct} from '../../type';

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
          renderItem={({item}) => <AllProductsCard item={item} />}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 1, width: 10}} />}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
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
    alignItems: 'center',
    alignContent: 'center',
    gap: 5,
    display: 'flex',
  },
});

export default AllProductsRender;
