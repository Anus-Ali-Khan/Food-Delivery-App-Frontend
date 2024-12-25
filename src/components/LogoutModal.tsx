import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';
import {colors, fonts} from '../utilities/constants';

interface propsType {
  openLogoutModal: boolean;
  setOpenLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal = ({openLogoutModal, setOpenLogoutModal}: propsType) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 300,
        left: 50,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        // zIndex: 999,
      }}>
      <View style={styles.modalStyle}>
        <Text style={styles.textStyle}>
          Are you sure do you want to Logout ?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 6,
            zIndex: 999,
          }}>
          <Button
            title="Yes, Logout"
            backgroundColor={colors.SECONDARY}
            textColor="white"
            borderColor="transparent"
            onPressIn={() => setOpenLogoutModal(false)}
            style={{width: '60%'}}
          />
          <Button
            title="Cancel"
            backgroundColor={colors.SECONDARY}
            textColor="white"
            borderColor="transparent"
            onPressIn={() => setOpenLogoutModal(false)}
          />
        </View>
      </View>
    </View>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    height: 150,
    width: 250,
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.SECONDARY,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ModaltextStyle: {
    fontFamily: fonts.SECONDARY,
  },
});
