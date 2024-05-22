import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../type';
import RegistrationScreen from '../screen/registrationScreem';
import LogInScreen from '../screen/LogInScreen';
import DrawerNavigator from './DrawerNavigator';
import SettingsScreen from '../screen/settings';
import SingleProductScreen from '../screen/SingleProductScreen';
import EditProductScreen from '../screen/EditProductScreen';

export type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductPage" component={SingleProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Edit" component={EditProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;