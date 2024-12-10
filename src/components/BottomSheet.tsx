import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import CameraIcon from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../utilities/constants';
import GalleryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface propsType {
  isBSOpen: boolean;
  setIsBSOpen: React.Dispatch<React.SetStateAction<boolean>>;
  photo: string;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const CustomBottomSheet = ({
  isBSOpen,
  setIsBSOpen,
  photo,
  setPhoto,
}: propsType) => {
  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleCamera = async () => {
    setIsBSOpen(false);

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera({
          mediaType: 'photo',
          cameraType: 'back',
        });
        if (result) {
          const photo = (result.assets ?? [])[0].uri;
          // setPhoto(photo);
          console.log(photo);
        }
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              gap: 4,
            }}>
            <CameraIcon name="camera" size={30} onPress={handleCamera} />
            <Text style={[styles.textStyle]}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center', gap: 4}}>
            <GalleryIcon
              name="view-gallery-outline"
              size={30}
              onPress={() => setIsBSOpen(false)}
            />
            <Text style={styles.textStyle}>Gallery</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontFamily: fonts.SECONDARY,
  },
});
