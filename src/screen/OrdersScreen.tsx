import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/types';
import Logo from '../components/Logo/Logo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function CartScreen() {
    
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Logo />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

