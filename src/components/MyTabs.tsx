import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FilterScreen from '../screen/filterScreen';
import DataScreen from '../screen/dataScreen';
import HomeScreen from '../screen/homeScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Data" component={DataScreen} />
    </Tab.Navigator>
  );
}
