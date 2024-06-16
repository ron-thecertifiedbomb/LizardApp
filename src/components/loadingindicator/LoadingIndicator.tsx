import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import Container from '../container/Container';

const LoadingIndicator = () => {
  return (
    <Container style={styles.container}>
      <ActivityIndicator size="large" color="grey" />
    </Container>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
