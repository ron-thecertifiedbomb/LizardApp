import React, {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import logger from '../../../utilities/logger/logger';
import FormTextInput from '../../formtextinput/FormTextInput';
import DatePicker from '../../datepicker/DatePicker';
import {date, time} from '../../../utilities/helpers/lib';
import Button from '../../button/Button';
import DateDisplay from '../../datepicker/DateDisplay';

type FormData = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>();

  const [dob, setDob] = useState(new Date());

  const navigation = useNavigation();

  const mutation = useMutation(
    async (data: FormData) => {
      // Your mutation logic
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
    },
  );

  const onSubmit: SubmitHandler<FormData> = data => {
    const {username, password, email} = data;

    const formData = {
      username: username,
      pasword: password,
      email: email,
      dateofbirth: dob,
      dateCreated: date(),
      timeCreated: time(),
    };
    logger('formData', formData);

    // mutation.mutate(data);
  };

  return (
    <View style={styles.container}>
      <FormTextInput
        control={control}
        name="firstname"
        label="Firstname"
        rules={{required: 'Firstname is required'}}
        errors={errors}
      />

      <FormTextInput
        control={control}
        name=" lastname"
        label="Lastname"
        rules={{required: 'Lastname is required'}}
        errors={errors}
      />

      <FormTextInput
        control={control}
        name="username"
        label="Username"
        rules={{required: 'Username is required'}}
        errors={errors}
      />
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Email is invalid',
          },
        }}
        errors={errors}
      />
      <FormTextInput
        control={control}
        name="password"
        label="Password"
        rules={{required: 'Password is required'}}
        errors={errors}
      />

<View style={styles.dateWrapper}>
      <DatePicker value={dob} onChange={setDob} />
        <DateDisplay value={dob} /> 
        </View>
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
  dateWrapper: {
 display: 'flex',
 flexDirection: 'row',
 gap: 10,
 marginBottom: 10,
  },
});

export default RegisterForm;
