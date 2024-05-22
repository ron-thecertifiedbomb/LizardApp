import Reactotron from 'reactotron-react-native';


Reactotron
  .configure({ name: 'Lizard App' })
  .useReactNative()

  .connect();

console.tron = Reactotron; // Make it globally available
  