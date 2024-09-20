import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuScreenTopTabs from '../../components/Navigations/MenuScreenTopTabs';

const ViewMenu = () => {
  return (
    <View style={{flex: 1}}>
      <MenuScreenTopTabs />
    </View>
  );
};

export default ViewMenu;

const styles = StyleSheet.create({});
