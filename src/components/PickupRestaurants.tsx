import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import PickupRestaurantsSvg from '../assets/images/pickuprest.svg';
import Button from './Button';
import {colors, fonts} from '../utilities/constants';

type PickupRestauarntCardProps = {
  id: string;
  title: string;
  description: string;
  rating: string;
  img: ReactNode;
};

const PickupRestaurants = ({
  //   id,
  title,
  description,
  rating,
}: //   img,
PickupRestauarntCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <PickupRestaurantsSvg width="100%" />

      <View
        style={{
          position: 'absolute',
          bottom: 24,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          {/* <View style={{backgroundColor: 'black', width: 100, opacity: }}>
            <Text>hkljkjk</Text>
          </View> */}
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
          <Button
            title="View Menu"
            backgroundColor={colors.SECONDARY}
            textColor="white"
            borderColor={colors.SECONDARY}
            buttonStyle={styles.button}
            textStyle={styles.text}
          />
        </View>
      </View>
    </View>
  );
};

export default PickupRestaurants;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: 16,
    // height: 190,
  },
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 20,
    color: 'white',
  },
  description: {
    fontFamily: fonts.PRIMARY,
    fontSize: 11,
    color: 'white',
  },
  rating: {
    fontFamily: fonts.PRIMARY,
    fontSize: 8,
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
