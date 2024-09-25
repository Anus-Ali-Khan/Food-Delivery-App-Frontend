import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import RestaurantLogo from '../../images/restaurantImage.svg';
import {colors, fonts, myCartList} from '../../utilities/constants';
import CancelIcon from 'react-native-vector-icons/AntDesign';

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
        data={myCartList}
        keyExtractor={item => item.id}
        style={styles.flatList}
        renderItem={({item}) => (
          <View
            style={{
              paddingHorizontal: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 12,
              borderBottomWidth: !(parseInt(item.id) === myCartList.length)
                ? 1
                : 0,
              borderBottomColor: '#D1D1D1',
              // backgroundColor: 'yellow',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 16,
                  backgroundColor: 'red',
                }}>
                <Image source={item.img} style={styles.img} />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 4,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.SECONDARY,
                    fontSize: 18,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                <View
                  style={[
                    {
                      backgroundColor: colors.SECONDARY,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                    styles.addToCartContainer,
                  ]}>
                  <View style={styles.addToCartContainer}>
                    <Text
                      style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                      -
                    </Text>
                    <Text
                      style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                      1
                    </Text>
                  </View>
                  <Text style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                    +
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <CancelIcon name="close" size={18} />
              <Text
                style={{
                  color: colors.SECONDARY,
                  fontFamily: fonts.SECONDARY,
                  fontSize: 16,
                }}>
                ${item.price}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.headerBar}>
        <Text style={styles.headerBarTitle}>Price Details</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text
          style={{fontFamily: fonts.SECONDARY, color: 'black', fontSize: 18}}>
          Total (2 items)
        </Text>
        <Text
          style={{fontFamily: fonts.SECONDARY, color: 'black', fontSize: 18}}>
          $11.99
        </Text>
      </View>
      <View>
        <Text
          style={{fontFamily: fonts.SECONDARY, color: 'black', fontSize: 18}}>
          Delivery Mode
        </Text>
      </View>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  flatList: {
    height: '23.5%',
    flexGrow: 0,
  },
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
  },
  addToCartContainer: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
  },
  addToCartText: {
    color: 'white',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
  },
});
