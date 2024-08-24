import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../utilities/constants';

type PropsType = {
  title: string;
  backgroundColor?: string;
};

const Button = ({title, backgroundColor = colors.PRIMARY}: PropsType) => {
  return (
    <View>
      <Pressable style={{...styles.button, backgroundColor}}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 14,
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'medium',
  },
});
