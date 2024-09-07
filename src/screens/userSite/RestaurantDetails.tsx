import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '../../components/Slider';
import {FlatList} from 'react-native-gesture-handler';
import {CarouselImagesList} from '../../utilities/constants';

const RestaurantDetails = () => {
  return (
    <View>
      <FlatList
        data={CarouselImagesList}
        renderItem={({item}) => <Slider item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
