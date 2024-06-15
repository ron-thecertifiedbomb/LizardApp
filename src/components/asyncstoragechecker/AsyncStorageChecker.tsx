import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../redux/reducers/userslice/reducer/isLoggedInReducer';
import { setUserId } from '../../redux/reducers/userIdReducer';


interface UserData {
  userId: string;
  isLoggedIn: boolean;
  lastLoggedInTime: string;
  message: string;
  token: string;
}

const CheckUserId: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value) {
        const data: UserData = JSON.parse(value);
        setUserData(data);
        dispatch(setIsLoggedIn(data.isLoggedIn));
        dispatch(setUserId(data.userId));
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error(error);
      setUserData({ userId: '', isLoggedIn: false, lastLoggedInTime: '', message: 'Error retrieving data', token: '' });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <View style={styles.dataContainer}>
          <Text style={styles.text}>UserId: {userData.userId}</Text>
          <Text style={styles.text}>IsLoggedIn: {userData.isLoggedIn.toString()}</Text>
          <Text style={styles.text}>Last Logged In Time: {userData.lastLoggedInTime}</Text>
          <Text style={styles.text}>Message: {userData.message}</Text>
          <Text style={styles.text}>Token: {userData.token}</Text>
        </View>
      ) : (
        <Text style={styles.text}>No user data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default CheckUserId;
