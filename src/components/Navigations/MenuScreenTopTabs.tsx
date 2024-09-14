import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoriesTab from '../CategoriesTab';
import DealsTab from '../DealsTab';
import CustomTopTabBar from '../CustomTopTabBar';

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
    <Tab.Navigator
      initialRouteName={tabsType.Tab1}
      tabBar={props => <CustomTopTabBar {...props} />}>
      {tabScreens.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default MenuScreenTopTabs;

const styles = StyleSheet.create({});
