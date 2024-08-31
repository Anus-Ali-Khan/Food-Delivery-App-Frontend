import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import Button from './Button';
import {colors} from '../utilities/constants';

type RestaurantCardProps = {
  id: string;
  title: string;
  description: string;
  rating: string;
  img: ReactNode;
};

const RestaurantCards = ({
  id,
  title,
  description,
  rating,
  img,
}: RestaurantCardProps) => {
  return (
    <View style={styles.container}>
      {img}
      <View>
        <Text>{title}</Text>
        <View>
          <Text>{description}</Text>
          <Text>{rating}</Text>
        </View>
      </View>
      <Button
        title="View Menu"
        backgroundColor={colors.SECONDARY}
        textColor="white"
        borderColor={colors.SECONDARY}
      />
    </View>
  );
};

export default RestaurantCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
