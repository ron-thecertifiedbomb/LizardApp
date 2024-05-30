import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../../redux/reducers/isLoggedInReducer';
import {setUserId} from '../../../redux/reducers/userIdReducer';
import FormTextInput from '../../formtextinput/FormTextInput';
import Button from '../../button/Button';
import {FormData} from '../type';
import LoadingIndicator from '../../LoadingIndicator';
import {StyleSheet} from 'react-native';
import colors from '../../../constants/color';

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
        >
        <Text style={styles.title}>Click here to register</Text>
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

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: colors.primaryColor,
  },
});

export default LogInForm;
