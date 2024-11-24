import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';
import {colors, fonts} from '../utilities/constants';
import Images from '../images/Images';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface PropsType {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal = ({setOpenModal}: PropsType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleClick = () => {
    setOpenModal(false);
    navigation.navigate('Orders');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Order has been placed successfully</Text>
      <Image
        source={
          Images.body.orderGif
          // uri: 'https://gifdb.com/images/high/animated-transparent-background-check-mark-lb1gygckicpca0fb.gif',
        }
        style={{width: 100, height: 100}}
      />
      <View style={{flexDirection: 'row', gap: 8}}>
        <Button
          title="Visit Your Orders"
          backgroundColor={colors.SECONDARY}
          textColor="white"
          borderColor="transparent"
          onPress={handleClick}
        />
        <Button
          title="Cancel"
          backgroundColor={colors.SECONDARY}
          textColor="white"
          borderColor="transparent"
          onPress={() => setOpenModal(false)}
        />
      </View>
    </View>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
    height: 250,
    gap: 6,
  },
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    width: '100%',
  },
});
