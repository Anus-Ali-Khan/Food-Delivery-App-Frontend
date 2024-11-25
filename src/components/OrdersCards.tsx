import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors, fonts} from '../utilities/constants';
import Button from './Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type OngoingOrdersCardProps = {
  id: string;
  title: string;
  description: string;
  rating: string;
  price: string;
  img: ReactNode;
};

const OrdersCards = ({
  id,
  title,
  description,
  rating,
  price,
  img,
}: OngoingOrdersCardProps) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        {img}
        <View>
          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', gap: 5}}>
        <Button
          title="View Status"
          backgroundColor={colors.SECONDARY}
          textColor="white"
          borderColor={colors.SECONDARY}
          buttonStyle={styles.button}
          textStyle={styles.text}
          onPress={() => navigation.navigate('OrderStatus')}
        />
        <Text
          style={{
            fontSize: 11,
            fontFamily: fonts.SECONDARY,
            color: colors.SECONDARY,
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
};

export default OrdersCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    gap: 4,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
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
    fontSize: 11,
    color: colors.TERTIARY,
  },
  button: {
    width: 93,
    height: 32,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.PRIMARY,
    fontSize: 11,
  },
});
