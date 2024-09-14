import {StyleSheet, TouchableOpacity, View, Animated} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utilities/constants';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const CustomTopTabBar = ({state, navigation}: MaterialTopTabBarProps) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

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
              {flex: 1},
              styles.tabButton,
              isFocused ? styles.focusedTab : styles.unfocusedTab,
            ]}>
            <Animated.Text style={[styles.tabLabel]}>
              {route.name}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTopTabBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    height: 50,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedTab: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 8,
  },
  unfocusedTab: {
    backgroundColor: '#EBEBEB',
  },
  tabLabel: {
    fontFamily: fonts.SECONDARY,
    fontSize: 18,
    color: 'black',
  },
});
