import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FetchingComponent from '../components/FetchingComponent';
import AppInitializer from '../components/appinializer/AppInitializer';


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <FetchingComponent />
      <AppInitializer/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
