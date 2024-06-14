import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/components/navigation/AppNavigator';
import { store } from './src/redux/store/store';
import CustomModal from './src/components/modal/Modal';



function Entry(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
       <CustomModal />
      </QueryClientProvider>
    </Provider>
  );
}

export default Entry;
