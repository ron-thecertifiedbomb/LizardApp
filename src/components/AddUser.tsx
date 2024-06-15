import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Contact = () => {
  // State for form fields and notifications
  const [formState, setFormState] = useState({ username: '', password: '', address: '' });
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState('');


  const newData = {
    'username': '',
    'password': '',
    'firstname': '',
    'lastname': '',
    'address': '',
    'contactno': '',
    'email': '',
  };

  const handleSubmit = async () => {
    try {
      // Fetching API endpoint
      let res = await fetch('https://nextjs-server-rho.vercel.app/api/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      let data = await res.json();
      setMessage(data.message);
      setActive(true);
      setTimeout(() => {
        setActive(false);
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };


  const handleChange = (id: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {active && message ? <Text style={{ position: 'absolute', bottom: 20, backgroundColor: 'lightblue', padding: 10 }}>{message}</Text> : null}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>How can we help today?</Text>
      <TextInput
        placeholder="Your Name"
        onChangeText={(text) => handleChange('username', text)}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 10, width: '80%' }}
      />
      <TextInput
        placeholder="password"
        onChangeText={(text) => handleChange('password', text)}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 10, width: '80%' }}
      />
      <TextInput
        placeholder="address"
        onChangeText={(text) => handleChange('address', text)}
        multiline
        numberOfLines={6}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 20, width: '80%' }}
      />
      {/* Submit button */}
      <Button title="Send" onPress={handleSubmit} />
    </View>
  );
};

export default Contact;
