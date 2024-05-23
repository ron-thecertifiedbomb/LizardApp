import Reactotron from 'reactotron-react-native';

const logger = (log: string, input: any) => {
    return console.log(`${log} :`, JSON.stringify(input, null, 2));
  };
export default logger;
