import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import MyTabs from './MyTabs';
import Header from '../Header';
import CartScreen from '../../screen/CartScreen';
import OrdersScreen from '../../screen/OrdersScreen';
import { selectIsLoggedIn } from '../../redux/selectors/users/selector';

// Initialize the Drawer navigator outside the component to avoid re-creating it on every render
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false, 
    }}
    >
      <Drawer.Screen name="My Store" component={MyTabs} />
      <Drawer.Screen name="My Cart" component={CartScreen} />
      <Drawer.Screen name="My Orders" component={OrdersScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
