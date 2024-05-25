import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button as PaperButton } from 'react-native-paper';

type FormData = {
  username: string;
  password: string;
  email: string;
};

const RegistrationForm = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const mutation = useMutation(
    (data: FormData) =>
      fetch('https://nextjs-server-rho.vercel.app/api/users/signup/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    {
      onSuccess: () => {
        reset();
        navigation.navigate('Login' as never);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <View style={{ width: '80%', alignSelf: 'center', display: 'flex', gap: 10 }}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Username"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            style={{ borderWidth: 0.5, borderColor: 'black', backgroundColor: 'transparent' }}
          />
        )}
        name="username"
        rules={{ required: 'Username is required' }}
        defaultValue=""
      />
      {errors.username && <Text>{errors.username.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={true}
            style={{ borderWidth: 0.5, borderColor: 'black', backgroundColor: 'transparent' }}
          />
        )}
        name="password"
        rules={{ required: 'Password is required' }}
        defaultValue=""
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            style={{ borderWidth: 0.5, borderColor: 'black', backgroundColor: 'transparent' }}
          />
        )}
        name="email"
        rules={{ required: 'Email is required' }}
        defaultValue=""
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <PaperButton
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ backgroundColor: 'blue', marginTop: 10 }}
      >
        Sign Up
      </PaperButton>
    </View>
  );
};

export default RegistrationForm;
