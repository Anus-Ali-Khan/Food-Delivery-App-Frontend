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
import Reviews from '../../screens/userSite/Reviews';
import CustomStackHeader from '../CustomStackHeader';
import BackArrowIcon from 'react-native-vector-icons/AntDesign';
import ViewMenu from '../../screens/userSite/ViewMenu';
import LocationSvg from '../../images/location.svg';
import CartSvg from '../../images/cartIcon.svg';
import MyCart from '../../screens/userSite/MyCart';
import MyCards from '../../screens/userSite/MyCards';
import SelectLocation from '../../screens/userSite/SelectLocation';

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
      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerShown: true,
          header: () => {
            return (
              <CustomStackHeader
                title="Reviews"
                backIcon={
                  <BackArrowIcon name="arrowleft" size={16} color={'black'} />
                }
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="ViewMenu"
        component={ViewMenu}
        options={{
          headerShown: true,
          header: () => {
            return (
              <CustomStackHeader
                backIcon={
                  <BackArrowIcon name="arrowleft" size={16} color={'black'} />
                }
                headerIcon={<LocationSvg height="15px" width="15px" />}
                title="Main 33rd Street, Gulistan-e-Johar"
                cartIcon={<CartSvg height="15px" width="15px" />}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerShown: true,
          header: () => {
            return (
              <CustomStackHeader
                backIcon={
                  <BackArrowIcon name="arrowleft" size={16} color={'black'} />
                }
                title="My Cart"
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="MyCards"
        component={MyCards}
        options={{
          headerShown: true,
          header: () => {
            return (
              <CustomStackHeader
                backIcon={
                  <BackArrowIcon name="arrowleft" size={16} color={'black'} />
                }
                title="My Cards"
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={{
          headerShown: true,
          header: () => {
            return (
              <CustomStackHeader
                backIcon={
                  <BackArrowIcon name="arrowleft" size={16} color={'black'} />
                }
                title="Select Locations"
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
