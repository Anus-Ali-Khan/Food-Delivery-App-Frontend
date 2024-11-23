import {Modal as RNModal, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';

interface ModalPropsType extends PropsWithChildren {
  children: ReactElement;
  isOpen: boolean;
}

const CustomModal = ({isOpen, children}: ModalPropsType) => {
  return (
    <RNModal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}>
      <View style={styles.modalContainer}>{children}</View>
    </RNModal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
