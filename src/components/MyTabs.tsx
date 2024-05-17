import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CoffeePage from '../screen/coffeeScreen';
import ProfileScreen from '../screen/profileScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Coffee" component={CoffeePage} />
    </Tab.Navigator>
  );
}
