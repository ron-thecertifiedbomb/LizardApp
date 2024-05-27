import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.round}>
      <Image
        style={styles.image}
        source={require('../../../assets/logo/lizardlogo.png')}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: 90,
  },
  round: {
    width: 140,
    height: 140,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 14,
  },
});
