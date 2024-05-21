import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const LoadingScreen = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.loader, { transform: [{ rotate: spin }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  loader: {
    borderWidth: 16,
    borderTopWidth: 16,
    borderColor: 'grey',
    borderRadius: 50,
    width: 120,
    height: 120,
  },
});

export default LoadingScreen;
