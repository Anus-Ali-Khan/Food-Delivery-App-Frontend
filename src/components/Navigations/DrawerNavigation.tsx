import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomHeader from '../CustomHeader';
import TopTabNavigation from './TopTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="TopTabNavigation">
      <Drawer.Screen
        name="Home"
        component={TopTabNavigation}
        options={{
          headerTitle: props => <CustomHeader />,
          headerTitleContainerStyle: {width: '100%'},
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
