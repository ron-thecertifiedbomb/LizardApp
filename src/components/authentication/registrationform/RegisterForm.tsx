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
import GenderPicker from '../../genderpicker/GenderPicker';
import fontStyles from '../../../constants/fontStyle';

type FormData = {
  firstname: string;
  lastname: string;
  username: string;
  mobile: number;
  email: string;
  password: string;
  dob: string;
  gender: 'male' | 'female';
};

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>();

  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState<FormData['gender']>('male');

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
    const {firstname, lastname, mobile, username, password, email, gender} =
      data;

    const formData = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      mobile: mobile,
      gender: gender,
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
  titleWrapper :{
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title :{
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
