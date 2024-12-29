import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import Button from './Button';
import {colors, fonts} from '../utilities/constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type HistoryOrdersCardProps = {
  id: string;
  title: string;
  price: string;
  orderDate: string;
  img: ReactNode;
};

const HistoryOrdersCard = ({
  id,
  title,
  price,
  orderDate,
  img,
}: HistoryOrdersCardProps) => {
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
            <Text style={styles.rating}>{orderDate}</Text>
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
          onPressIn={() =>
            navigation.navigate('OrderStatus', {status: 'history'})
          }
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

export default HistoryOrdersCard;

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
