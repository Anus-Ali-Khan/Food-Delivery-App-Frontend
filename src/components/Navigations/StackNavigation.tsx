import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/appIntro/SplashScreen';
import Welcome from '../../screens/appIntro/Welcome';
import OnBoarding from '../../screens/appIntro/OnBoarding';
import SignUp from '../../screens/authScreens/SignUp';
import Login from '../../screens/authScreens/Login';
import ForgotPassword from '../../screens/authScreens/ForgotPassword';
import ChangePassword from '../../screens/authScreens/ChangePassword';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
