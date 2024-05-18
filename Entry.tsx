import * as React from 'react';
import {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux'; // Import Redux Provider
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/components/AppNavigator';
import {store} from './src/redux/store/store';

function Entry(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </Provider>
  );
}

export default Entry;
