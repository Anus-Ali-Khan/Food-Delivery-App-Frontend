import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const ChooseLocation = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
      />
    </View>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({});
