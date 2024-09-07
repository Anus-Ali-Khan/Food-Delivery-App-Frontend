import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

type PropsType = {
  item: {
    id: string;
    img: ImageSourcePropType;
  };
};

const {width, height} = Dimensions.get('screen');

const Slider = ({item}: PropsType) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="cover" style={styles.image} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    flex: 0.3,
    width: '100%',
  },
});
