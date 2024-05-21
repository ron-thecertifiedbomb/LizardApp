// DetailsScreen.tsx
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import AllProductsRender from '../components/AllProductsRender';
import useGetAllProductsHooks from '../hooks/useGetAllProductsHook';
import {useDispatch, useSelector} from 'react-redux';
import {allProductsData} from '../redux/reducers/getProductsReducer';
import {AllProductData} from '../redux/selectors/selectors';

export default function AllProductsScreen() {

  const {isLoading, isError, data, error, refetch} = useGetAllProductsHooks();

  // const dispatch = useDispatch();


    refetch()

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
        <AllProductsRender item={data} />
      )}
    </View>
  );
}
