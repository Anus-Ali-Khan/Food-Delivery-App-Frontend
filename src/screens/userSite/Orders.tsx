import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuScreenTopTabs from '../../components/Navigations/MenuScreenTopTabs';

const Orders = ({route}: any) => {
  const {orderStatus} = route.params || {};

  return <MenuScreenTopTabs orderStatus={orderStatus} />;
};

export default Orders;

const styles = StyleSheet.create({});
