import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FilterScreen from '../screen/filterScreen';
import DataScreen from '../screen/dataScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Data" component={DataScreen} />
    </Tab.Navigator>
  );
}
