import {
  Alert,
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {
  Region,
  MapPressEvent,
  LatLng,
  Polyline,
} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {getDistance} from 'geolib';
import {colors} from '../../utilities/constants';
// import Geocoder from 'react-native-geocoding';

// Geocoder.init('AIzaSyBxPFxpju8tZ58acQvjmFHH5Bp5odZ_acc');

const ChooseLocation = () => {
  const [location, setLocation] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [source, setSource] = useState<LatLng>({latitude: 0, longitude: 0});
  const [destination, setDestination] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  const [isChoosingSource, setIsChoosingSource] = useState(false);
  const [isChoosingDestination, setIsChoosingDestination] = useState(false);
  // const [openRBS, setOpenRBS] = useState<boolean>(false);
  // const [address, setAddress] = useState('');

  const getUsersCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },
      error => {
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
            title: 'Map Permission',
            message:
              'react native maps needs access to your location ' +
              'so you can set your location.',
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

  const handleMapPress = (e: MapPressEvent) => {
    const coordinates = e.nativeEvent.coordinate;
    console.log(coordinates);
    if (isChoosingSource) {
      setSource(coordinates);
      setIsChoosingSource(false);
    } else if (isChoosingDestination) {
      setDestination(coordinates);
      setIsChoosingDestination(false);
    }
  };

  const showCoordinates = () => {
    // setOpenRBS(true);
    if (
      (source.latitude != 0 && source.latitude != 0) ||
      (destination.latitude != 0 && destination.longitude != 0)
    ) {
      const distance =
        getDistance(
          {
            latitude: source.latitude,
            longitude: source.longitude,
          },
          {
            latitude: destination.latitude,
            longitude: destination.longitude,
          },
        ) / 1000;
      Alert.alert(
        'Coordinates and Distance',
        `Source: \nLatitude: ${destination.latitude}, Longitude:${
          source.longitude
        }\n\nDestination: \nLatitude: ${destination.latitude}, Longitude: ${
          destination.longitude
        } \n\nDistance between source and destination:${distance.toFixed(
          2,
        )}kilometers`,
      );
    } else {
      Alert.alert(
        'Error',
        'Please select both source and destination coordinates.',
      );
    }
  };

  useEffect(() => {
    requestLocationPermission();
    // const getAddress = async () => {
    //   try {
    //     const response = await Geocoder.from(
    //       location.latitude,
    //       location.longitude,
    //     );
    //     const formattedAddress = response.results[0].formatted_address;
    //     setAddress(formattedAddress);
    //   } catch (error) {
    //     console.warn(error);
    //   }
    // };

    // getAddress();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
        // onRegionChangeComplete={data => console.log(data)}
        onPress={handleMapPress}>
        {location && (
          <Marker
            coordinate={location}
            onPress={data => console.log(data.nativeEvent.coordinate)}
            title={'Testing'}
          />
        )}
        {source && (
          <Marker
            coordinate={source}
            title={'Source'}
            pinColor={'green'}
            draggable={true}
            onDragEnd={e => setSource(e.nativeEvent.coordinate)}
          />
        )}
        {destination && (
          <Marker
            coordinate={destination}
            title={'Destination'}
            pinColor={'blue'}
            draggable={true}
            onDragEnd={e => setDestination(e.nativeEvent.coordinate)}
          />
        )}
        {source && destination && (
          <Polyline
            coordinates={[source, destination]}
            strokeColor="#000"
            strokeWidth={2}
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          {source.latitude != 0 && source.longitude != 0 ? (
            <Button
              title="Remove Source"
              onPress={() => setSource({latitude: 0, longitude: 0})}
            />
          ) : (
            <Button
              title={
                isChoosingSource ? 'Please Choose Source' : 'Choose Source'
              }
              onPress={() => setIsChoosingSource(true)}
            />
          )}
          {destination.latitude != 0 && destination.longitude != 0 ? (
            <Button
              title="Remove Destination"
              onPress={() => setDestination({latitude: 0, longitude: 0})}
            />
          ) : (
            <Button
              title={
                isChoosingDestination
                  ? 'Please Choose Destination'
                  : 'Choose Destination'
              }
              onPress={() => setIsChoosingDestination(true)}
            />
          )}
        </View>
        <Button title="Show Coordinates" onPress={showCoordinates} />
      </View>
    </View>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
