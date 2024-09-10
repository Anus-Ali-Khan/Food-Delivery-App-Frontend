import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {fonts} from '../utilities/constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type HeaderPropsType = {
  icon: ReactNode;
  title: string;
};

const CustomStackHeader = ({icon, title}: HeaderPropsType) => {
  7;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateBack = () => {
    navigation.navigate('RestaurantDetails');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleNavigateBack}>{icon}</TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomStackHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    elevation: 6,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 16,
    color: 'black',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '88%',
  },
});
