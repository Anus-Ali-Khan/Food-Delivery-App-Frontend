import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, dealsList, fonts} from '../utilities/constants';
import {FlatList} from 'react-native-gesture-handler';
import Button from './Button';

const DealsTab = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
      }}>
      <Text style={styles.headingStyle}>Thai Cuisine Deals</Text>
      <FlatList
        data={dealsList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.dealsCardContainer}>
            <Image source={item.img} style={styles.img} />
            <View
              style={{
                paddingVertical: 8,
                width: '60%',
                paddingHorizontal: 16,
              }}>
              <Text
                style={{
                  marginBottom: 8,
                  color: 'white',
                  fontFamily: fonts.SECONDARY,
                  fontSize: 16,
                }}>
                {item.title}
              </Text>
              {item.items.map(dealItem => (
                <View style={{flexDirection: 'column'}} key={dealItem.name}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.dealItems}>{dealItem.name}</Text>
                    <Text style={styles.dealItems}>{dealItem.quantity}</Text>
                  </View>
                </View>
              ))}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Button
                  title="Remove"
                  borderColor="transparent"
                  textStyle={{
                    fontSize: 12,
                    fontFamily: fonts.SECONDARY,
                    color: colors.SECONDARY,
                  }}
                  buttonStyle={{paddingHorizontal: 8, paddingVertical: 2}}
                />
                <Text style={[styles.dealItems, {fontSize: 18}]}>
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <Button
        title="+"
        borderColor="transparent"
        textColor={colors.SECONDARY}
        style={{
          position: 'absolute',
          bottom: 32,
          right: 20,
          paddingVertical: 3,
          paddingHorizontal: 12,
          elevation: 6,
        }}
        textStyle={{fontWeight: '700', fontSize: 22}}
      />
    </View>
  );
};

export default DealsTab;

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: fonts.SECONDARY,
    fontSize: 22,
    color: 'black',
    paddingVertical: 16,
  },

  dealsCardContainer: {
    backgroundColor: colors.SECONDARY,
    height: 130,
    width: '100%',
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: 'row',
    elevation: 4,
  },
  img: {
    width: '40%',
    height: 130,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    resizeMode: 'cover',
  },
  dealItems: {
    color: 'white',
    fontSize: 12,
    fontFamily: fonts.PRIMARY,
  },
});
