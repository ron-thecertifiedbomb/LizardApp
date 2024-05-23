import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoreScreen from '../../screen/StoreScreen';
import CartScreen from '../../screen/CartScreen';
import OrdersScreen from '../../screen/OrdersScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}
