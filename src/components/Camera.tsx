import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useCameraDevice} from 'react-native-vision-camera';

const Camera = ({route}: any) => {
  const {isCameraOpen} = route.params || {};
  console.log(isCameraOpen)

  const device = useCameraDevice('back');
  if (device == null) return <Text>No devices</Text>;

  return (
    <View style={{flex: 1}}>
      {isCameraOpen && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isCameraOpen}
        />
      )}
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
