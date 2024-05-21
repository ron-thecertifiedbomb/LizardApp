import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {usersData} from '../redux/reducers/getUserDataReducer';
import {selectFilteredData} from '../redux/selectors/selectors';
import Card from '../components/Card';
import ClientSideFilterTabs from '../components/ClientSideFilterTabs';
import useGetAllUsersHooks from '../hooks/useGetAllUsersHook';

interface UserData {
  _id: string;
  name: string;
  description: string;
  imagelink_square: string;
  imagelink_portrait: string;
}

export default function HomeScreen() {
  
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredData);

  const handleStoreData = (data: UserData[]) => {
    dispatch(usersData(data));
  };
  
  const {isLoading, isError, error} = useGetAllUsersHooks({
    onSuccessCallback: handleStoreData,
  });


  if (isLoading) {
    return (
      <View style={{padding: 5}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{padding: 5}}>
        <Text>
          Error:{' '}
          {error instanceof Error ? error.message : 'An unknown error occurred'}
        </Text>
      </View>
    );
  }

  return (
    <View style={{padding: 5}}>
      <ClientSideFilterTabs />
      <FlatList
        data={filteredData as UserData[]}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
}
