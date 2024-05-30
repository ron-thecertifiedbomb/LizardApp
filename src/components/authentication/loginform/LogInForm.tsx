import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button as PaperButton} from 'react-native-paper';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../../redux/reducers/isLoggedInReducer';
import {setUserId} from '../../../redux/reducers/userIdReducer';
import FormTextInput from '../../formtextinput/FormTextInput';
import Button from '../../button/Button';
import {FormData} from '../type';
import LoadingIndicator from '../../LoadingIndicator';

const LogInForm = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>();

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation(
    async (data: FormData) => {
      setIsLoading(true);
      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/users/authenticate/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }

      return response.json();
    },
    {
      onSuccess: data => {
        const userId = data.userId;
        dispatch(setIsLoggedIn(true));
        dispatch(setUserId(userId));
        Alert.alert('Success', 'Authentication successful', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Store' as never);
            },
          },
        ]);
      },
      onError: error => {
        console.error(error);
        Alert.alert(
          'Error',
          'An error occurred during login. Please try again.',
          [
            {
              text: 'OK',
              onPress: () => {
                setError('An error occurred during login. Please try again.');
                reset();
              },
            },
          ],
        );
      },
      onSettled: () => {
        setIsLoading(false);
      },
    },
  );

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const handleNavigateToRegistration = () => {
    navigation.navigate('RegistrationPage' as never);
  };

  return (
    <View style={{width: '80%', alignSelf: 'center', display: 'flex', gap: 10}}>
      <FormTextInput
        control={control}
        name="username"
        label="Username"
        rules={{required: 'Username is required'}}
        errors={errors}
      />

      <FormTextInput
        control={control}
        name="password"
        label="Password"
        rules={{required: 'Password is required'}}
        errors={errors}
      />

      <TouchableOpacity
        onPress={handleNavigateToRegistration}
        style={{marginTop: 10}}>
        <Text style={{textAlign: 'center', color: 'blue'}}>Register</Text>
      </TouchableOpacity>

  
       <LoadingIndicator visible={isLoading} />
      
        <Button
          title={'Log In'}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />
    
    </View>
  );
};

export default LogInForm;
