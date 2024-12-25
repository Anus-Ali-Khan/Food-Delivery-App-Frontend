import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Images from '../../images/Images';
import {colors, fonts} from '../../utilities/constants';

const Settings = () => {
  return (
    <View
      style={{
        flex: 1,

        marginTop: 8,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          gap: 12,
          padding: 16,
          backgroundColor: colors.PRIMARY,
          alignItems: 'center',
        }}>
        <Image source={Images.body.languageIcon} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>
          Select Language
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
