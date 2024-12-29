import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import Button from './Button';
import {colors, fonts} from '../utilities/constants';
import Images from '../images/Images';
// import LinearGradient from 'react-native-linear-gradient';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

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
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateToRestaurantDetails = () => {
    navigation.navigate('RestaurantDetails');
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={handleNavigateToRestaurantDetails}>
      <ImageBackground
        source={Images.body.pickupCard}
        style={styles.image}
        borderRadius={15}>
        {/* <LinearGradient
          colors={['black', 'gray', 'white']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{width: '100%', height: 200, opacity: 0.2}}> */}
        <View
          style={{
            backgroundColor: 'black',
            height: 180,
            opacity: 0.2,
            width: '100%',
            position: 'absolute',
            borderRadius: 15,
          }}></View>
        {/* </LinearGradient> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
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
            onPressIn={() => navigation.navigate('ViewMenu')}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PickupRestaurants;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
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
