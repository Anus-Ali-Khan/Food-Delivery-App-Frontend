import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../utilities/constants';
import {cartItemsTypes} from '../utilities/constants';

const FoodItemsCard = ({item}: {item: cartItemsTypes}) => {
  return (
    <View style={styles.cartItemCards}>
      {item.img}
      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 10,
          gap: 8,
          marginTop: -10,
          borderWidth: 1,
          borderColor: '#E2E2E2',
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.itemPrice}>{item.price}</Text>
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
              <Text style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                -
              </Text>
              <Text style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                1
              </Text>
            </View>

            <Text style={[styles.addToCartText, {paddingHorizontal: 4}]}>
              +
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodItemsCard;

const styles = StyleSheet.create({
  cartItemCards: {
    marginHorizontal: 6,
    // marginBottom: 6,
    flexBasis: '45.8%',
  },
  itemName: {
    fontFamily: fonts.SECONDARY,
    fontSize: 16,
    color: 'black',
  },
  itemPrice: {
    fontFamily: fonts.PRIMARY,
    fontSize: 20,
    color: 'black',
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
  },
  addToCartText: {
    color: 'white',
  },
});
