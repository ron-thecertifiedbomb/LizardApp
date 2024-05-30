import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import fontStyles from '../../constants/fontStyle';
import colors from '../../constants/color';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  containerStyle?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      onPress={onPress}
      disabled={loading}>
      <Text style={styles.buttonText}>
        {loading ? <ActivityIndicator size="small" color="white" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: fontStyles.Lato_Bold,
    
  },
});

export default CustomButton;
