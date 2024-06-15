import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface DateDisplayProps {
  value: Date;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ value }) => {

  const formattedDate = value.toDateString();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={formattedDate}
        editable={false}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,

  },
  input: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    color: '#000', // Text color

  },
});

export default DateDisplay;
