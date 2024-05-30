import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet} from 'react-native';

interface GenderPickerProps {
  value: 'male' | 'female';
  onChange: (value: 'male' | 'female') => void;
}

const GenderPicker: React.FC<GenderPickerProps> = ({value, onChange}) => {
  return (
    <Picker selectedValue={value} onValueChange={onChange} style={styles.input}>
      <Picker.Item label="Male" value="male" style={styles.picker} />
      <Picker.Item label="Female" value="female" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  
  input: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 10,
  },
  picker: {
    fontSize: 14,
  },
});

export default GenderPicker;
