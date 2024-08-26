import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../utilities/constants';

type PropsType = {
  title: string;
  backgroundColor?: string;
  textColor?: string;

  onPress?: () => void;
};

const Button = ({
  title,
  backgroundColor = colors.PRIMARY,
  textColor,
  onPress,
}: PropsType) => {
  return (
    <View>
      <Pressable style={{...styles.button, backgroundColor}} onPress={onPress}>
        <Text style={{...styles.text, color: textColor}}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 6,
    borderColor: colors.PRIMARY,
    borderWidth: 2,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'medium',
  },
});
