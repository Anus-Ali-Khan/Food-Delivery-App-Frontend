import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import HomeDel from '../../images/homedel.svg';
import Pickup from '../../images/pickup.svg';
import HomeDelivery from '../../screens/userSite/HomeDelivery';
import PickupScreen from '../../screens/userSite/PickupScreen';
import {colors, fonts} from '../../utilities/constants';

const Tab = createMaterialTopTabNavigator();

enum tabsType {
  HomeDelivery = 'Home Delivery',
  Pickup = 'Pick up',
}

const tabScreens = [
  {
    name: tabsType.HomeDelivery,
    component: HomeDelivery,
    img: <HomeDel height={80} width={80} />,
  },
  {
    name: tabsType.Pickup,
    component: PickupScreen,
    img: <Pickup height="80px" width="80px" />,
  },
];

const DeliveryOptions = ({state, navigation}: MaterialTopTabBarProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        gap: 8,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        console.log(route);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.tabButton,
              isFocused ? styles.focusedTab : styles.unfocusedTab,
              styles.tabStyles,
            ]}>
            <Text
              style={{
                color: isFocused ? 'white' : 'black',
                fontFamily: fonts.PRIMARY,
              }}>
              {route.name === 'Home Delivery' ? (
                <HomeDel height={80} width={80} />
              ) : (
                <Pickup height="80px" width="80px" />
              )}
            </Text>
            <Text
              style={{
                color: isFocused ? 'white' : 'black',
                fontFamily: fonts.PRIMARY,
              }}>
              {' '}
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={tabsType.HomeDelivery}
      tabBar={props => <DeliveryOptions {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      {tabScreens.map(screen => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          key={screen.name}
          // options={{swipeEnabled: false}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  tabStyles: {
    width: 160,
    height: 123,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    flexDirection: 'column',
  },
  focusedTab: {
    backgroundColor: colors.SECONDARY,
  },
  unfocusedTab: {
    backgroundColor: '#EBEBEB',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
  },
  tabLabel: {
    fontFamily: fonts.SECONDARY,
    fontSize: 18,
    color: 'black',
  },
});
