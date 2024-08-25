import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/appIntro/SplashScreen';
import Welcome from '../../screens/appIntro/Welcome';
import OnBoarding from '../../screens/appIntro/OnBoarding';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="OnBorading" component={OnBoarding} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
