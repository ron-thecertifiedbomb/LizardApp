import {View, Text, StyleSheet} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import Header from '../components/Header';

type RootStackParamList = {
  OrderScreen: {userId: string; orderScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

export default function CartScreen() {
  const route = useRoute<StoreScreenRouteProp>();
  const {userId, orderScreenHeaderTitle} = route.params;

  console.log(userId)

  return (
    <View style={styles.container}>
      <Header title={orderScreenHeaderTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
