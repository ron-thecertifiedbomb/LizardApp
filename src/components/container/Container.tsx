import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
