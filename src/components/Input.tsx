import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../utilities/constants';
import FeatherIcons from 'react-native-vector-icons/Feather';

type PropsType = {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: () => void;
  value?: string;
  inputStyles?: {};
  errors?: {[key: string]: {message?: string}};
  name?: string;
  icon?: ReactNode;
  placeholderTextColor?: string;
  numberOfLines?: number;
};

const Input = ({
  placeholder,
  secureTextEntry = false,
  onChangeText,
  value,
  inputStyles,
  errors,
  name,
  icon,
  placeholderTextColor,
  numberOfLines,
}: PropsType) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry);

  return (
    <View style={{position: 'relative'}}>
      {icon ? icon : null}
      <TextInput
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={showPassword}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
        style={[
          styles.input,
          {borderColor: isFocused ? `${colors.PRIMARY}` : '#DADADA'},
          {...inputStyles},
        ]}
      />
      {errors?.[name ?? ''] && (
        <Text style={{color: 'red', fontFamily: fonts.PRIMARY}}>
          {errors[name ?? '']?.message}
        </Text>
      )}

      {secureTextEntry &&
        (showPassword ? (
          <FeatherIcons
            name="eye"
            color={'#2d333a'}
            size={22}
            style={{position: 'absolute', top: 14, right: 15}}
            onPress={() => setShowPassword(false)}
          />
        ) : (
          <FeatherIcons
            name="eye-off"
            color={'#2d333a'}
            size={22}
            style={{position: 'absolute', top: 14, right: 15}}
            onPress={() => setShowPassword(true)}
          />
        ))}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: fonts.PRIMARY,
  },
});
