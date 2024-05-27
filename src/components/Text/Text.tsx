import React from 'react';
import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native';
import fontStyles from '../../constants/fontStyle';
import colors from '../../constants/color';
import ContainerComponent from '../container/Container';

interface TextComponentProps {
  text: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  fontSize?: number; // New prop for font size
}

const TextComponent: React.FC<TextComponentProps> = ({
  text,
  textStyle,
  containerStyle,
  fontSize = 24, // Default font size
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ContainerComponent>
        <Text style={[styles.textStyle, textStyle, { fontSize: fontSize }]}>{text}</Text>
      </ContainerComponent>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textStyle: {
    fontFamily: fontStyles.Lato_Bold,
    fontWeight: '100',
    color: colors.primaryTextColor,
   
  },
});
