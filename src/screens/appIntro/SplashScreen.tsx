import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utilities/constants';

const SplashScreen = () => {
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
