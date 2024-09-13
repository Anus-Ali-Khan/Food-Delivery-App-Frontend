import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoriesTab from '../CategoriesTab';
import DealsTab from '../DealsTab';

const Tab = createMaterialTopTabNavigator();

enum tabsType {
  Tab1 = 'Categories',
  Tab2 = 'Deals',
}

const tabScreens = [
  {
    name: tabsType.Tab1,
    component: CategoriesTab,
  },
  {
    name: tabsType.Tab2,
    component: DealsTab,
  },
];

const MenuScreenTopTabs = () => {
  return (
    <Tab.Navigator initialRouteName={tabsType.Tab1}>
      {tabScreens.map(tab => (
        <Tab.Screen name={tab.name} component={tab.component} key={tab.name} />
      ))}
    </Tab.Navigator>
  );
};

export default MenuScreenTopTabs;

const styles = StyleSheet.create({});
