import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {fonts} from '../../utilities/constants';

const MyCards = () => {
  return (
    <View
      style={{
        marginTop: 6,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}>
      <Text style={{fontSize: 22, fontFamily: fonts.SECONDARY}}>
        You have not added any cards
      </Text>
      <Button
        title="Add Card"
        borderColor="transparent"
        textColor="black"
        style={{width: '30%', borderRadius: 10}}
      />
    </View>
  );
};

export default MyCards;

const styles = StyleSheet.create({});
