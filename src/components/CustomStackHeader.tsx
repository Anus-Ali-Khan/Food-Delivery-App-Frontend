import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {fonts} from '../utilities/constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type HeaderPropsType = {
  backIcon: ReactNode;
  title: string;
  headerIcon?: ReactNode;
  cartIcon?: ReactNode;
};

const CustomStackHeader = ({
  backIcon,
  headerIcon,
  title,
  cartIcon,
}: HeaderPropsType) => {
  7;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View
      style={[
        styles.headerContainer,
        {justifyContent: cartIcon ? 'space-between' : 'center'},
      ]}>
      <TouchableOpacity onPress={handleNavigateBack}>
        {backIcon}
      </TouchableOpacity>
      <View style={[styles.titleContainer, {width: !cartIcon ? '88%' : null}]}>
        {headerIcon}
        <Text style={styles.title}>{title}</Text>
      </View>
      {cartIcon}
    </View>
  );
};

export default CustomStackHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    elevation: 2,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 14,
    color: 'black',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
  },
});
