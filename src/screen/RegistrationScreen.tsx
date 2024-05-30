
import Container from '../components/container/Container';
import RegisterForm from '../components/authentication/registrationform/RegisterForm';

import { StyleSheet, View } from 'react-native';



export default function RegistrationScreen() {
  return (
    <Container >

  
      <RegisterForm />
  
    </Container>
  );


}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },

});