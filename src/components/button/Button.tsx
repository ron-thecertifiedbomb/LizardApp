import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
import TextComponent from '../Text/Text';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  containerStyle?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, loading = false, containerStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        // <TextComponent  text={title}/>
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
