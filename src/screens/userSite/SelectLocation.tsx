import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, locationCards} from '../../utilities/constants';
import AddIcon from 'react-native-vector-icons/Octicons';
import CheckIcon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../components/Button';

const SelectLocation = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
      <View style={{marginHorizontal: 16, marginVertical: 12}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{fontFamily: fonts.SECONDARY, color: 'black', fontSize: 22}}>
            Select Your Location
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <AddIcon name="diff-added" color={colors.PRIMARY} />
            <Text
              style={{
                fontSize: 10,
                fontFamily: fonts.PRIMARY,
                color: colors.SECONDARY,
              }}>
              Add location
            </Text>
          </View>
        </View>
        <FlatList
          data={locationCards}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#DBDBDB',
                borderRadius: 12,
                marginVertical: 6,
                flexDirection: 'row',
                gap: 8,
                padding: 8,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <Image source={item.img} />
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.SECONDARY,
                    fontSize: 20,
                    color: colors.SECONDARY,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.PRIMARY,
                    fontSize: 11,
                    width: '90%',
                    marginVertical: 4,
                  }}>
                  {item.description}
                </Text>
              </View>
              <CheckIcon
                name="check-circle"
                color={colors.SECONDARY}
                style={{position: 'absolute', right: 12, top: 12}}
              />
            </View>
          )}
        />
      </View>
      <Button
        title="Done"
        borderColor="transparent"
        backgroundColor="#07BC49"
        textColor="black"
        style={{marginHorizontal: 16}}
      />
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({});
