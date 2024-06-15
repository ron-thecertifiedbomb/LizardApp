import React from 'react';
import {StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../button/Button';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {

  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || value;
    onChange(currentDate);
    toggleDatePicker();
  };

  return (
    <>
      <Button title="Select Date of Birth" onPress={toggleDatePicker} />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
    </>
  );
};

export default DatePicker;
