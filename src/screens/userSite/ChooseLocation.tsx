import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

const ChooseLocation = () => {
  const getUsersCurrentLocation = () => {
    // Geolocation.getCurrentPosition(position => {
    //   console.log(position);
    // });
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted');
          getUsersCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to show your current location on the map.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

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
