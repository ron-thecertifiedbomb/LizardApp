import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import ProductCard from './ProductCard';


const AllProductsRender: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://nextjs-server-rho.vercel.app/api/products/getAllProducts/route',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const {isLoading, isError, data, error} = useQuery('data', fetchData);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error: {(error as Error).message}</Text>
      ) :

         <ProductCard item={data} />}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllProductsRender;
