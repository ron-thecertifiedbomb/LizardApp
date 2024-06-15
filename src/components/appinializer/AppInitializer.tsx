import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setIsLoggedIn } from '../../redux/reducers/userslice/reducer/isLoggedInReducer';
import { setUserId } from '../../redux/reducers/userIdReducer';
import Logo from '../logo/Logo';
import useGetAllProductsHooks from '../../hooks/useGetAllProductsHook';

const AppInitializer: React.FC = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useGetAllProductsHooks();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const value = await AsyncStorage.getItem('userData');
        if (value) {
          const userData = JSON.parse(value);
          const { isLoggedIn, userId, expiration } = userData;

          if (expiration && Date.now() > expiration) {

            await AsyncStorage.removeItem('userData');
            dispatch(setIsLoggedIn(false));
            navigation.navigate('LogInScreen' as never);
            Alert.alert('Session Expired', 'Your session has expired. Please log in again.');
          } else {
            dispatch(setIsLoggedIn(isLoggedIn));
            dispatch(setUserId(userId));
            navigation.navigate('DrawerNavigator' as never);
          }
        } else {
          navigation.navigate('LogInScreen' as never);
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
        navigation.navigate('LogInScreen' as never);
      }
    };

    initializeApp();
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <Logo />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppInitializer;
