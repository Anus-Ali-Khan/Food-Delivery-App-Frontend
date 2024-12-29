import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {colors, fonts} from '../../utilities/constants';
import Images from '../../images/Images';

const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.body.deliveryboy} style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.text}>Welcome To Our</Text>
          <Text style={styles.extraText}>Delivery App</Text>
          <View>
            <Button
              title={'Continue as a User'}
              onPressIn={() => navigation.navigate('OnBoarding')}
              borderColor={colors.PRIMARY}
              buttonStyle={styles.buttons}
            />
            <View style={styles.dividerContainer}>
              <View style={styles.divider}></View>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 15}}>
                Or
              </Text>
              <View style={styles.divider}></View>
            </View>
            <Button
              title={'Continue as a Vendor'}
              borderColor={colors.PRIMARY}
              buttonStyle={styles.buttons}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'medium',
    fontSize: 32,
    fontFamily: fonts.PRIMARY,
  },
  extraText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 70,
    marginTop: -6,
    marginBottom: 24,
    fontFamily: 'MrsSheppards-Regular',
  },

  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
    alignItems: 'center',
    gap: 10,
  },
  divider: {
    height: 2,
    backgroundColor: 'white',
    width: '38%',
  },
  buttons: {
    marginHorizontal: 16,
  },
});
