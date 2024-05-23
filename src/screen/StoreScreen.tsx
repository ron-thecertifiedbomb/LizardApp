import {View, Text, Button} from 'react-native';
import useGetAllProductsHooks from '../hooks/useGetAllProductsHook';
import LoadingIndicator from '../components/LoadingIndicator';
import AllProductsRender from '../components/AllProductsRender';


export default function StoreScreen() {
 
  const {isLoading, isError, data, error, refetch} = useGetAllProductsHooks();

  const handleRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error('Error while refreshing:', error);
    }
  };

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error: {error?.message}</Text>
        <Button title="Retry" onPress={handleRefresh} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
     <AllProductsRender item={data ?? null} />
    </View>
  );
}
