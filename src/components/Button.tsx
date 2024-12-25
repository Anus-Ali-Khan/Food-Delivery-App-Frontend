import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utilities/constants';

type PropsType = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  buttonStyle?: {};
  textStyle?: {};
  style?: {};
  onPressIn?: () => void;
};

const Button = ({
  title,
  backgroundColor = colors.PRIMARY,
  textColor,
  borderColor,
  buttonStyle,
  textStyle,
  onPressIn,
  style,
}: PropsType) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor,
        borderColor,
        ...buttonStyle,
        ...style,
      }}
      onPressIn={onPressIn}>
      <Text style={{...styles.text, color: textColor, ...textStyle}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    borderRadius: 6,
    borderColor: colors.PRIMARY,
    borderWidth: 2,
  },
  text: {
    color: '#1E1E1E',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: fonts.PRIMARY,
  },
});
