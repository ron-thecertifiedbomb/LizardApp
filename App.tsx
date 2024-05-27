import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Entry from './Entry';



if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}


function App(): React.ReactElement {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Entry />;
}

export default App;

