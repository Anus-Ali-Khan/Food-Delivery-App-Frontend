import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/appIntro/SplashScreen';
import Welcome from '../../screens/appIntro/Welcome';
import OnBoarding from '../../screens/appIntro/OnBoarding';
import SignUp from '../../screens/authScreens/SignUp';
import Login from '../../screens/authScreens/Login';
import ForgotPassword from '../../screens/authScreens/ForgotPassword';
import ChangePassword from '../../screens/authScreens/ChangePassword';
import DrawerNavigation from './DrawerNavigation';
import RestaurantDetails from '../../screens/userSite/RestaurantDetails';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
