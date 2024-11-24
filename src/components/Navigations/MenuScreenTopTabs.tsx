import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoriesTab from '../CategoriesTab';
import DealsTab from '../DealsTab';
import CustomTopTabBar from '../CustomTopTabBar';
import HistoryOrdersTab from '../HistoryOrdersTab';
import OngoingOrdersTab from '../OngoingOrdersTab';

const Tab = createMaterialTopTabNavigator();

enum tabsType {
  Tab1 = 'Categories',
  Tab2 = 'Deals',
  Tab3 = 'Ongoing',
  Tab4 = 'History',
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

const orderTabScreens = [
  {
    name: tabsType.Tab3,
    component: OngoingOrdersTab,
  },
  {
    name: tabsType.Tab4,
    component: HistoryOrdersTab,
  },
];

const MenuScreenTopTabs = ({orderStatus}: any) => {
  return (
    <Tab.Navigator
      initialRouteName={tabsType.Tab1}
      tabBar={props => <CustomTopTabBar {...props} />}>
      {orderStatus
        ? orderTabScreens.map(tab => (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
            />
          ))
        : tabScreens.map(tab => (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
            />
          ))}
    </Tab.Navigator>
  );
};

export default MenuScreenTopTabs;

const styles = StyleSheet.create({});
