import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyTabs from './MyTabs';
import SettingsScreen from '../screen/settings';
import DetailsScreen from '../screen/SingleProductScreen';
import Header from './Header';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <Header />,
        headerShown: true,
      }}>
      <Drawer.Screen name={'Home'} component={MyTabs} />
      <Drawer.Screen name={'Settings'} component={SettingsScreen} />
      <Drawer.Screen name={'Details'} component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
