// DetailsScreen.tsx
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import AllProductsRender from '../components/AllProductsRender';
import useGetAllProductsHooks from '../hooks/useGetAllProductsHook';


export default function AllProductsScreen() {

  const {isLoading, isError, data, error, refetch} = useGetAllProductsHooks();

  // const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, [refetch]);

  // useEffect(() => {
  //   if (data) dispatch(allProductsData(data));
  // }, []);

  // const products = useSelector(AllProductData);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error: {(error as Error).message}</Text>
      ) : (
        <AllProductsRender item={data ?? null} />
      )}
    </View>
  );
}
