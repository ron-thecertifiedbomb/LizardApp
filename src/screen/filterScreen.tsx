import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FilterTabs from '../components/FilterTabs';
import Card from '../components/Card';

interface UserData {
  _id: string;
  name: string;
  description: string;
  imagelink_square: string;
  imagelink_portrait: string;
}

const FilterScreen: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (name: string) => {
    try {
      const response = await fetch(
        `https://nextjs-server-rho.vercel.app/api/users/filter/route?name=${name}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error as Error); // Type assertion here
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData('All'); // Fetch initial data when component mounts
  }, []);

  const handlePress = async (name: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await fetchData(name);
    } catch (error) {
      setError(error as Error); // Type assertion here
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message || 'Unknown error'}</Text>
      ) : (
        <>
          <FilterTabs onPress={handlePress} />
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <Card item={item} />}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default FilterScreen;
