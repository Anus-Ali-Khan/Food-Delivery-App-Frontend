import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {colors, fonts} from '../../utilities/constants';
import Images from '../../images/Images';

const OnBoarding = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      source={Images.body.onBoarding}
      style={styles.backgroundImage}>
      <View style={styles.content}>
        <Text style={styles.text}>Order cravings in</Text>
        <Text style={styles.extraText}>Delivery app</Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          borderColor={colors.PRIMARY}
          buttonStyle={styles.buttons}
        />
        <Button
          title="Already have an Account"
          backgroundColor="transparent"
          textColor="white"
          borderColor={colors.PRIMARY}
          buttonStyle={styles.buttons}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    gap: 16,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'medium',
    fontSize: 32,
    marginBottom: -16,
    fontFamily: fonts.PRIMARY,
  },
  extraText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 70,
    fontFamily: 'MrsSheppards-Regular',
  },
  buttons: {
    marginHorizontal: 16,
  },
});
