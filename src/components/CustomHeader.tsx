import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../utilities/constants';
import LocationSvg from '../images/location.svg';
import LocationMapSvg from '../images/locationmap.svg';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <LocationSvg height="20px" width="20px" />
        <Text style={styles.text}>Main 33rd Street, Gulistan-e-Johar</Text>
      </View>
      <View style={{marginRight: -6}}>
        <LocationMapSvg height="20px" width="20px" />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontFamily: fonts.PRIMARY,
    fontSize: 14,
  },
});
