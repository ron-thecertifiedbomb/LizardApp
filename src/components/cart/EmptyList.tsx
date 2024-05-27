import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextComponent from '../Text/Text';

const EmptyList = () => {
  return (
    <View style={styles.container}>
     <TextComponent text={'Your Cart is empty'} fontSize={20}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
  fontSize: 15,
  },
});

export default EmptyList;
