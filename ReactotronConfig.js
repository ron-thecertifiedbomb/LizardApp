import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({ name: 'Lizard Interactive Mobile App' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = Reactotron;

export default Reactotron;
