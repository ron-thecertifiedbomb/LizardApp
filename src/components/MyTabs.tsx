import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FilterScreen from '../screen/filterScreen';
import HomeScreen from '../screen/homeScreen';
import ProfileScreen from '../screen/AllProductsScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="All Products" component={ProfileScreen} />
      <Tab.Screen name="Filter" component={FilterScreen} />
      
     
    </Tab.Navigator>
  );
}
