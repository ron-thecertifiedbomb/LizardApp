import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserId } from '../redux/selectors/selectors'; // Adjust the path as necessary

const DataScreen: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(selectUserId);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Data Redux Testing</Text>
      <Text>User is {isLoggedIn ? 'logged in' : 'logged out'}</Text>
      {isLoggedIn && <Text>User ID: {userId}</Text>}
    </View>
  );
};

export default DataScreen;
