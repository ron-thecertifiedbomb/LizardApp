import {View, Text, StyleSheet} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import Header from '../components/Header';
import TextComponent from '../components/Text/Text';
import Container from '../components/container/Container';
import AsyncStorageChecker from '../components/asyncstoragechecker/AsyncStorageChecker';

type RootStackParamList = {
  OrderScreen: {userId: string; orderScreenHeaderTitle: string};
};

type StoreScreenRouteProp = RouteProp<RootStackParamList>;

export default function CartScreen() {
  const route = useRoute<StoreScreenRouteProp>();
  const {userId, orderScreenHeaderTitle} = route.params;

  console.log(userId);

  return (
    <View style={styles.container}>
      <Header title={orderScreenHeaderTitle} />
      <Container>
   <AsyncStorageChecker />
      </Container>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
