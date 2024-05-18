import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CoffeePage from '../screen/coffeeScreen';
import ProfileScreen from '../screen/profileScreen';
import FilterScreen from '../screen/filterScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Coffee" component={CoffeePage} />
    </Tab.Navigator>
  );
}
