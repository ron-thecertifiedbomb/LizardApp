import React from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logger from '../../../utilities/logger/logger';

type FormData = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const navigation = useNavigation();

  const mutation = useMutation(
    async (data: FormData) => {
      const response = await fetch('https://nextjs-server-rho.vercel.app/api/users/signup/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Something went wrong');
      }

      return responseData;
    },
    {
      onSuccess: () => {
        reset();
        navigation.navigate('Login' as never);
      },
      onError: (error: any) => {
        console.error(error);
        Alert.alert('Registration Error', error.message);
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    logger('fomrData',data)
    mutation.mutate(data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        {...register('username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        {...register('email')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        {...register('password')}
      />
      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default RegisterForm;
