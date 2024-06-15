import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Hero = () => {
  return (
    <View style={styles.heroWrapper}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/mj1.png')}

      />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroWrapper: {
    height: 220,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 60, height: 60,
    resizeMode: 'cover',
  },
});
