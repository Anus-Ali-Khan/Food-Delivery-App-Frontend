import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './Input';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import {cartItems, categories, colors, fonts} from '../utilities/constants';
import {FlatList} from 'react-native-gesture-handler';

const CategoriesTab = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search Items"
        placeholderTextColor="white"
        inputStyles={styles.inputStyles}
        icon={
          <SearchIcon
            name="search"
            size={16}
            style={{
              color: 'white',
              position: 'absolute',
              top: 18,
              left: 14,
              zIndex: 10,
            }}
          />
        }
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.headingStyle}>Select Category</Text>
          <Text style={styles.subtitle}>Clear All</Text>
        </View>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={({item}) => (
            <View
              style={{
                paddingRight: !(parseInt(item.id) === categories.length)
                  ? 16
                  : 0,
                marginTop: 8,
              }}>
              {item.img}
              <Text style={styles.subtitle}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <Text style={styles.headingStyle}>Burgers For You</Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
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
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  inputStyles: {
    paddingLeft: 36,
    backgroundColor: colors.SECONDARY,
    borderColor: colors.SECONDARY,
  },
  headingStyle: {
    fontFamily: fonts.SECONDARY,
    fontSize: 22,
    color: 'black',
  },
  subtitle: {
    fontFamily: fonts.PRIMARY,
    fontSize: 10,
    color: colors.SECONDARY,
  },
  cartItemCards: {
    marginHorizontal: 6,
    marginBottom: 6,
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
