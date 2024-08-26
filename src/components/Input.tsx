import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {colors} from '../utilities/constants';

type PropsType = {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: () => void;
  value: string;
  errors: {[key: string]: {message?: string}};
  name: string;
};

const Input = ({
  placeholder,
  secureTextEntry = false,
  onChangeText,
  value,
  errors,
  name,
}: PropsType) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        style={[
          styles.input,
          {borderColor: isFocused ? `${colors.PRIMARY}` : '#DADADA'},
        ]}
      />
      {errors[name] && (
        <Text style={{color: 'red'}}>{errors[name]?.message}</Text>
      )}
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
