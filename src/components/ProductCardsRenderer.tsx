import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {IProduct} from '../types/products/type';
import LoadingIndicator from './loadingindicator/LoadingIndicator';
import Container from './container/Container';
import StoreCard from './cards/StoreCard';

interface Props {
  item: IProduct[] | null;
}

const ProductCardsRenderer: React.FC<Props> = ({item}) => {
  return (
    <Container>
      {item ? (
        <FlatList
          data={item}
          keyExtractor={item => item._id}
          renderItem={({item}) => <StoreCard item={item} />}
          numColumns={2}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, width: '100%'}} />
          )}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <LoadingIndicator />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCardsRenderer;
