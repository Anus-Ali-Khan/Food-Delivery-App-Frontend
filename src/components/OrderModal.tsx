import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';
import {colors} from '../utilities/constants';

interface PropsType {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal = ({setOpenModal}: PropsType) => {
  return (
    <View style={styles.container}>
      <Text>OrderModal</Text>
      <Button
        title="Close"
        backgroundColor={colors.SECONDARY}
        textColor="white"
        borderColor="transparent"
        onPress={() => setOpenModal(false)}
      />
    </View>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
    height: 200,
    gap: 6,
  },
});
