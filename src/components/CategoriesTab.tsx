import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './Input';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import {cartItems, categories, colors, fonts} from '../utilities/constants';
import {FlatList} from 'react-native-gesture-handler';
import Button from './Button';
import FoodItemsCard from './FoodItemsCard';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const CategoriesTab = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateToMyCart = () => {
    navigation.navigate('MyCart');
  };

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
        renderItem={FoodItemsCard}
        initialNumToRender={6}
        // disableVirtualization
      />
      <View
        style={{
          backgroundColor: colors.PRIMARY,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 12,
          borderRadius: 8,
        }}>
        <Text
          style={{fontFamily: fonts.SECONDARY, fontSize: 16, color: 'black'}}>
          Zinger Burger Added
        </Text>
        <Button
          title="View Cart"
          borderColor="transparent"
          backgroundColor={colors.SECONDARY}
          textColor="white"
          textStyle={{fontSize: 16}}
          buttonStyle={{paddingVertical: 3}}
          onPress={handleNavigateToMyCart}
        />
      </View>
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
});
