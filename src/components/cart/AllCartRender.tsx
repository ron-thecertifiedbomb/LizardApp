import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CartCard from './CartCard';
import {RootObject} from './type';


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
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default AllCartRender;
