import {View, Text, Button} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function CartScreen() {
    
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Orders Screen</Text>
    </View>
  );
}