import {Modal as RNModal, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ModalPropsType extends PropsWithChildren {
  children: ReactElement;
  isOpen: boolean;
  modalStyle?: {};
}

const CustomModal = ({isOpen, children, modalStyle}: ModalPropsType) => {
  return (
    <RNModal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      // statusBarTranslucent={true}
    >
      <View style={[styles.modalContainer, {...modalStyle}]}>{children}</View>
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
