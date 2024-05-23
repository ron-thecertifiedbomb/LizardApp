import Reactotron from 'reactotron-react-native';
import {name} from './app.json'


Reactotron
  .configure({ name: name })
  .useReactNative()
  .connect();

console.tron = Reactotron; // Make it globally available
  