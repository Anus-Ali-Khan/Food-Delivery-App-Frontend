import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utilities/constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import Welcome from './Welcome';
import {StackNavigationProp} from '@react-navigation/stack';

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
