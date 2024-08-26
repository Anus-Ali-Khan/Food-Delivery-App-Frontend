import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const OnBoarding = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      source={require('../../assets/images/OnBoarding.png')}
      style={styles.backgroundImage}>
      <View style={styles.content}>
        <Text style={styles.text}>Order cravings in</Text>
        <Text style={styles.extraText}>Delivery app</Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <Button
          title="Already have an Account"
          backgroundColor="transparent"
          textColor="white"
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
  },
  extraText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 70,
    fontFamily: 'MrsSheppards-Regular',
  },
});
