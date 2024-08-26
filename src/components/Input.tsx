import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../utilities/constants';

type PropsType = {
  placeholder: string;
};

const Input = ({placeholder}: PropsType) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          {borderColor: isFocused ? `${colors.PRIMARY}` : '#DADADA'},
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
