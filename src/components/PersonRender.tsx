import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from './PersonCard';
import { useQuery } from 'react-query';

const PersonRender: React.FC = () => {

  const fetchData = async () => {
    const response = await fetch('https://nextjs-server-rho.vercel.app/api/getAllUsers');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery('data', fetchData);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error: {(error as Error).message}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <Card item={item} />}
        />
      )}
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

export default PersonRender;
