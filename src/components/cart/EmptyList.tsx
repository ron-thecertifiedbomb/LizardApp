import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyListText}>Your Cart is empty</Text>
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
