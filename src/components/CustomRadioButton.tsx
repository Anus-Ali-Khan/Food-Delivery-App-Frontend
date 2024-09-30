import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {colors, fonts} from '../utilities/constants';

type PropsType = {
  selectedId: string | undefined;
  options: RadioButtonProps[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const CustomRadioButton = ({options, selectedId, setSelectedId}: PropsType) => {
  return (
    <RadioGroup
      radioButtons={options}
      onPress={setSelectedId}
      selectedId={selectedId}
      layout="row"
      labelStyle={{
        color: colors.SECONDARY,
        fontSize: 12,
        fontFamily: fonts.SECONDARY,
      }}
      containerStyle={{marginRight: -10}}
    />
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({});
