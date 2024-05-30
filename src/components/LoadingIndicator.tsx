import {ActivityIndicator, StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

const LoadingIndicator = (visible: any) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="grey" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </Modal>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
  },
});
