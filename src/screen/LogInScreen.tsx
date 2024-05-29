import React from 'react';
import {View} from 'react-native';
import LogInForm from '../components/authentication/loginform/LogInForm';
import LogIn from '../components/authentication/loginform/LogIn';

export default function LogInScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LogInForm />

    </View>
  );
}
