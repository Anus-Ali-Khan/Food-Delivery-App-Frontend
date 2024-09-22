import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import RestaurantLogo from '../../images/restaurantImage.svg';
import {cartItemsList, colors, fonts} from '../../utilities/constants';

const restaurant = {
  id: '1',
  title: 'Thai Cuisine',
  description: 'Deliver in 30mins',
  rating: '⭐4.1',
  img: <RestaurantLogo height="50px" width="54px" />,
};

const MyCart = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        {restaurant.img}
        <View>
          <Text style={styles.title}>{restaurant.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text style={styles.description}>{restaurant.description}</Text>
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerBar}>
        <Text style={styles.headerBarTitle}>Your Order Details</Text>
      </View>
      <FlatList
        data={cartItemsList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{paddingHorizontal: 16}}>
            {/* <Image source={item.img} style={styles.img} /> */}
            <View></View>
          </View>
        )}
      />
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 20,
    color: colors.TERTIARY,
  },
  description: {
    fontFamily: fonts.PRIMARY,
    fontSize: 11,
    color: colors.TERTIARY,
  },
  rating: {
    fontFamily: fonts.PRIMARY,
    fontSize: 8,
    color: colors.TERTIARY,
  },
  headerBarTitle: {
    fontFamily: fonts.SECONDARY,
    fontSize: 20,
    color: 'white',
  },
  headerBar: {
    backgroundColor: colors.SECONDARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  img: {
    height: 60,
    width: 60,
    resizeMode: 'center',
    borderRadius: 16,
  },
});
