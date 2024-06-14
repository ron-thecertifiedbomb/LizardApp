import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CartCard from './CartCard';
import {RootObject} from './type';
import logger from '../../utilities/logger/logger';

interface Props {
  item: RootObject[];
}

const AllCartRender: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={item}
        keyExtractor={item => item.productId}
        renderItem={({item}) => <CartCard item={item} />}
      />
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
