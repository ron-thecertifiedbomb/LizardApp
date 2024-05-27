import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { TextInput, Text, TextStyle, ViewStyle, StyleSheet, View } from 'react-native';

interface FormTextInputProps<T> {
    control: any;
    name: keyof T & string; 
    label: string;
    rules?: Object;
    defaultValue?: any;
    errors?: any;
    inputStyle?: TextStyle;
    containerStyle?: ViewStyle;
  }

  const FormTextInput = <T extends FieldValues>({
    control,
    name,
    label,
    rules,
    defaultValue,
    errors,
    inputStyle,
    containerStyle,
  }: FormTextInputProps<T>) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder={label}
              style={[styles.input, inputStyle]}
            />
          )}
          name={name}
          rules={rules}
          defaultValue={defaultValue}
        />
        {errors && errors[name] && <Text style={{ color: 'red' }}>{errors[name].message}</Text>}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#C0C0C0',
      backgroundColor: 'transparent',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 5,
    },
  });
  
  export default FormTextInput;