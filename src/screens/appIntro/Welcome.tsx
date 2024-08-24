import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {colors} from '../../utilities/constants';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Deliveryboy.png')}
        style={styles.image}>
        <Text style={styles.text}>Welcome To Our</Text>
        <Text style={styles.extraText}>Delivery App</Text>
        <View>
          <Button title={'Continue as a User'} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'medium',
    fontSize: 32,
  },
  extraText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 70,
    marginTop: -6,
    fontFamily: 'MrsSheppards-Regular',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
});
