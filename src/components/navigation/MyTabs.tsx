import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoreScreen from '../../screen/StoreScreen';
import CartScreen from '../../screen/CartScreen';
import OrdersScreen from '../../screen/OrdersScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faList,
  faShoppingCart,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

export default function MyTabs() {

  const Tab = createBottomTabNavigator();

  const cartScreenHeaderTitle = 'My Cart';
  const storeScreenHeaderTitle = 'My Store';
  const orderScreenHeaderTitle = 'My Orders';
  const userId = 'Ronan is a genius';

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Store') {
            iconName = faStore;
          } else if (route.name === 'Cart') {
            iconName = faShoppingCart;
          } else if (route.name === 'Orders') {
            iconName = faList;
          } else {
            iconName = faBars;
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        initialParams={{userId, storeScreenHeaderTitle}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        initialParams={{userId, cartScreenHeaderTitle}}
        listeners={({navigation}) => ({
          tabPress: e => {
            if (!userId) {
              e.preventDefault();
              navigation.navigate('Login');
            }
          },
        })}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        initialParams={{userId, orderScreenHeaderTitle}}
        listeners={({navigation}) => ({
          tabPress: e => {
            if (!userId) {
              e.preventDefault();
              navigation.navigate('Login');
            }
          },
        })}
      />
    </Tab.Navigator>
  );
}
