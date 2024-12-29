import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utilities/constants';
import Images from '../../images/Images';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Info = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image source={Images.body.languageIcon} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>FAQ's</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPressIn={() => navigation.navigate('ChangePassword')}>
        <Image source={Images.body.changePassword} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image source={Images.body.termsnConditions} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>
          Terms & Conditions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image source={Images.body.contactUs} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>
          Contact Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image source={Images.body.aboutUs} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>
          About Us
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 8,
    gap: 8,
  },
  buttonStyle: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
  },
});
