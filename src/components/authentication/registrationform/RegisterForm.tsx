import React, {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import logger from '../../../utilities/logger/logger';
import FormTextInput from '../../formtextinput/FormTextInput';
import DatePicker from '../../datepicker/DatePicker';
import Button from '../../button/Button';
import DateDisplay from '../../datepicker/DateDisplay';
import GenderPicker from '../../genderpicker/GenderPicker';
import fontStyles from '../../../constants/fontStyle';
import {User} from '../../../redux/reducers/userslice/types/types';

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<User>();

  const [dob, setDob] = useState(new Date());

  const [gender, setGender] = useState<User['gender']>('male');

  const navigation = useNavigation();

  const mutation = useMutation(
    async (data: User) => {
      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/users/signup/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Something went wrong');
      }

      return responseData;
    },
    {
      onSuccess: response => {
        reset();
        navigation.navigate('Login' as never);
        Alert.alert('Registration Success', response.message);
      },
      onError: (error: any) => {
        console.error(error);
        Alert.alert('Registration Error', error.message);
      },
    },
  );

  const onSubmit: SubmitHandler<User> = data => {
    const {firstname, lastname, mobile, username, password, email} = data;

    const currentDate = new Date();
    const dateCreated = currentDate.toISOString().split('T')[0]; 
    const timeCreated = currentDate.toLocaleTimeString(); 

    const userPayload: User = {
      firstname,
      lastname,
      username,
      mobile,
      email,
      password,
      gender,
      birthday: dob,
      dateCreated,
      timeCreated,
      isLoggedIn: false,
      lastLoggedIn: '',
    };
    mutation.mutate(userPayload);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Registration</Text>
      </View>

      <FormTextInput
        control={control}
        name="firstname"
        label="Firstname"
        rules={{required: 'Firstname is required'}}
        errors={errors}
      />

      <FormTextInput
        control={control}
        name="lastname"
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
        name="mobile"
        label="Mobile"
        rules={{required: 'Mobile number is required'}}
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
      <GenderPicker value={gender} onChange={setGender} />

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
    padding: 20,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fontStyles.Lato_Bold,
  },
  dateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
});

export default RegisterForm;
