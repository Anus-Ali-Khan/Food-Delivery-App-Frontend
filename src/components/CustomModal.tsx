import {Modal as RNModal, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';

interface ModalPropsType extends PropsWithChildren {
  children: ReactElement;
  isOpen: boolean;
}

const CustomModal = ({isOpen, children, ...rest}: ModalPropsType) => {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      style={styles.modalContainer}
      {...rest}>
      {children}
    </RNModal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 3,
    backgroundColor: '#EBEBEB',
    opacity: 40,
  },
});
