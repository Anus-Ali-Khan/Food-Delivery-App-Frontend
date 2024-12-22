import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
import Images from '../images/Images';
import {colors, fonts} from '../utilities/constants';
import CustomModal from './CustomModal';

interface propsType {
  openLogoutModal: boolean;
  setOpenLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal = ({openLogoutModal, setOpenLogoutModal}: propsType) => {
  return (
    <CustomModal modalStyle={styles.container} isOpen={openLogoutModal}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Your Order has been placed successfully
        </Text>
        <Image
          source={Images.body.orderGif}
          style={{width: 100, height: 100}}
        />
        <View style={{flexDirection: 'row', gap: 8}}>
          <Button
            title="Visit Your Orders"
            backgroundColor={colors.SECONDARY}
            textColor="white"
            borderColor="transparent"
            // onPress={handle}
          />
          <Button
            title="Cancel"
            backgroundColor={colors.SECONDARY}
            textColor="white"
            borderColor="transparent"
            onPress={() => setOpenLogoutModal(false)}
          />
        </View>
      </View>
    </CustomModal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
    height: 250,
    gap: 6,
  },
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    width: '100%',
  },
});
