import './gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/appIntro/SplashScreen';
import Welcome from './src/screens/appIntro/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/components/Navigations/StackNavigation';
import {ScrollView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
