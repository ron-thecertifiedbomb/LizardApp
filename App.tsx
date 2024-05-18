import * as React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Entry from './Entry';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Entry />;
}

export default App;
