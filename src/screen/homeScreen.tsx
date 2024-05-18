import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../redux/reducers/dataReducer';
import { selectData, selectDataError, selectDataLoading, selectFilteredData } from '../redux/selectors/selectors';
import Card from '../components/Card';
import ClientSideFilterTabs from '../components/ClientSideFilterTabs';
import { filterData } from '../redux/reducers/dataReducer'; // Import the filterData action

interface UserData {
  _id: string;
  name: string;
  description: string;
  imagelink_square: string;
  imagelink_portrait: string;
}

export default function HomeScreen() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(fetchDataStart()); // Dispatch action to start fetching data
    try {
      const response = await fetch('https://nextjs-server-rho.vercel.app/api/getAllUsers');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchDataSuccess(data)); 
    } catch (error: any) {
      dispatch(fetchDataFailure(error.message)); 
    }
  };

  const { isLoading, isError, data, error } = useQuery('data', fetchData); 

  console.log('Data fetched by Query', data);

  const dataLoading = useSelector(selectDataLoading);
  const dataError = useSelector(selectDataError);
  const fetchedData = useSelector(selectData);
  const filteredData = useSelector(selectFilteredData);
  console.log('Data fetched by Redux', fetchedData);

  useEffect(() => {
    fetchData();
  }, []);

  const handleTabPress = (category: string) => {
    console.log(category)
    dispatch(filterData(category));
  };

  return (
    <View style={{ flex: 1 }}>
      {dataError && <Text>Error fetching data: {dataError}</Text>}
      {isLoading && !dataLoading && <Text>Loading data...</Text>}
      <ClientSideFilterTabs onPress={handleTabPress} />
      <FlatList
        data={filteredData as UserData[]} 
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
}
