import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import RegistrationScreen from '../../screen/RegistrationScreen';
import DrawerNavigator from './DrawerNavigator';
import SettingsScreen from '../../screen/StoreScreen';
import ProductDetailsScreen from '../../screen/ProductDetailsScreen';
import EditProductScreen from '../../screen/EditProductScreen';
import SplashScreen from '../../screen/SplashScreen';
import LogInScreen from '../../screen/LogInScreen';


export type Props = NativeStackScreenProps<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductPage" component={ProductDetailsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegistrationPage" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LogInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Edit" component={EditProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
