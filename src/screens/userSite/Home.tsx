import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utilities/constants';
import {Image} from 'react-native';

const xml1 = ``;

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <View style={styles.homeDelCard}>
          <Image
            source={require('../../assets/images/homedel.png')}
            width={100}
            height={100}
            // style={{resizeMode: 'cover'}}
          />
        </View>
        <View style={styles.pickupCard}>
          <Image
            source={require('../../assets/images/pickup.png')}
            width={100}
            height={100}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeDelCard: {
    backgroundColor: colors.SECONDARY,
    width: 160,
    height: 123,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickupCard: {
    // backgroundColor: colors.SECONDARY,
    width: 160,
    height: 123,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
});
