import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {CarouselImagesList} from '../utilities/constants';
import BackArrow from 'react-native-vector-icons/Feather';
import CallIcon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Slider = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateBack = () => {
    navigation.navigate('Pickup');
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height * 0.35}
        autoPlay={true}
        data={CarouselImagesList}
        scrollAnimationDuration={1500}
        enabled
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Image source={item.img} style={styles.image} />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 12,
          paddingLeft: 16,
        }}>
        <BackArrow
          name="arrow-left"
          size={22}
          color={'white'}
          onPress={handleNavigateBack}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 12,
          right: 0,
          paddingRight: 16,
        }}>
        <CallIcon name="call-outline" size={20} color={'white'} />
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.35,
    backgroundColor: 'black',
    position: 'relative',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
});
