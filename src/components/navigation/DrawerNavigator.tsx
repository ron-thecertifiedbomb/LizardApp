import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import MyTabs from './MyTabs';
import CartScreen from '../../screen/CartScreen';
import OrdersScreen from '../../screen/OrdersScreen';
import {selectIsLoggedIn} from '../../redux/selectors/users/selector';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const cartScreenHeaderTitle = 'My Cart';
  const storeScreenHeaderTitle = 'My Store';
  const orderScreenHeaderTitle = 'My Orders';
  const userId = 'Ronan is a genius';

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Store"
        component={MyTabs}
        initialParams={{userId, storeScreenHeaderTitle}}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        initialParams={{userId, cartScreenHeaderTitle}}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        initialParams={{userId, orderScreenHeaderTitle}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
