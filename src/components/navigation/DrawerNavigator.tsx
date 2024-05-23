import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyTabs from './MyTabs';
import Header from '../Header';
import CartScreen from '../../screen/CartScreen';
import OrdersScreen from '../../screen/OrdersScreen';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <Header />,
        headerShown: true,
      }}>
      <Drawer.Screen name={'My Store'} component={MyTabs} />
      <Drawer.Screen name={'My Cart'} component={CartScreen} />
      <Drawer.Screen name={'My Orders'} component={OrdersScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
