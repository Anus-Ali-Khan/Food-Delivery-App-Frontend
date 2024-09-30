import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {colors, fonts} from '../utilities/constants';

type PropsType = {
  title1: string;
  title2: string;
};

const CustomRadioButton = ({title1, title2}: PropsType) => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: title1,
        value: 'option1',
        borderColor: colors.PRIMARY,
        color: colors.SECONDARY,
        size: 16,
      },
      {
        id: '2',
        label: title2,
        value: 'option2',
        borderColor: colors.PRIMARY,
        color: colors.SECONDARY,
        size: 16,
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <RadioGroup
      radioButtons={radioButtons}
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
