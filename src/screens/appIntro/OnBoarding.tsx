import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';

const OnBoarding = () => {
  return (
    <ImageBackground source={require('../../assets/images/OnBoarding.png')}>
      <View>
        <Text>Order Creavings</Text>
        <Text>Delivery app</Text>
        <Button title="Sign Up" />
        <Button title="Already have an Account" backgroundColor="transparent" />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
