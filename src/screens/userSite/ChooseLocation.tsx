import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const ChooseLocation = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={data => console.log(data)}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0421,
          }}
          onPress={data => console.log(data.nativeEvent.coordinate)}
          title={'Testing'}
          // description={marker.description}
        />
      </MapView>
    </View>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    ...StyleSheet.absoluteFillObject,
  },
});
