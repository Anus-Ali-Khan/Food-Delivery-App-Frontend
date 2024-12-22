import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utilities/constants';
import GalleryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CameraIcon from 'react-native-vector-icons/Feather';

interface propsType {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCamera: () => Promise<void>;
  handleGallery: () => Promise<void>;
}

const CameraModal = ({
  openModal,
  setOpenModal,
  handleCamera,
  handleGallery,
}: propsType) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 300,
        left: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10,
      }}>
      <View style={styles.modalStyle}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontFamily: fonts.SECONDARY}}>
            Select
          </Text>
          <TouchableOpacity onPress={() => setOpenModal(false)}>
            <Text
              style={{
                backgroundColor: colors.SECONDARY,
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                textAlignVertical: 'center',
                color: 'white',
                height: 20,
                width: 20,
                borderRadius: 10,
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.contentContainer]}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              gap: 4,
            }}
            onPress={handleCamera}>
            <CameraIcon
              name="camera"
              size={30}
              color={colors.SECONDARY}
              onPress={handleCamera}
            />
            <Text style={[styles.ModaltextStyle]}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', gap: 4}}
            onPress={handleGallery}>
            <GalleryIcon
              name="view-gallery-outline"
              size={30}
              color={colors.SECONDARY}
              onPress={handleCamera}
            />
            <Text style={styles.ModaltextStyle}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CameraModal;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    height: 160,
    width: 250,
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ModaltextStyle: {
    fontFamily: fonts.SECONDARY,
  },
});
