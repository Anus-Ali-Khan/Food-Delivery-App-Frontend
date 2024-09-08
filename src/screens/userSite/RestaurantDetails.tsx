import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '../../components/Slider';
import {colors, fonts, timelineData} from '../../utilities/constants';
import Images from '../../images/Images';
import TabSvg from '../../images/tab.svg';
import ForwardIcon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-flatlist';
import Button from '../../components/Button';

const data = [
  {
    id: 1,
    title: 'Thai Cuisine',
    logo: Images.body.ThaiCuisineLogo,
    rating: '⭐4.3',
    reviews: 'Read 60 reviews >',
  },
];

const RestaurantDetails = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Slider />
      <View style={styles.cardContainer}>
        {data.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Image source={item.logo} style={styles.image} />
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.logoTitle}>{item.title}</Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                  <Text style={styles.rating}>{item.rating}</Text>
                  <Text style={styles.reviews}>{item.reviews}</Text>
                </View>
              </View>
            </View>
            <TabSvg />
          </View>
        ))}
      </View>
      <View style={{paddingHorizontal: 18, marginTop: 24}}>
        <Text style={styles.titles}>Address</Text>
        <Text style={styles.paraText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam
          veniam vel repudiandae nobis culpa delectus hic unde. Laborum, nobis
          reiciendis ipsa temporibus omnis fugiat. Pariatur quaerat iure
          voluptatem possimus.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
          }}>
          <Text style={[styles.paraText, {color: colors.SECONDARY}]}>
            Get Directions
          </Text>
          <ForwardIcon
            name="chevron-forward-outline"
            size={14}
            style={{color: colors.SECONDARY}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          marginTop: 8,
        }}>
        <Timeline
          data={timelineData}
          innerCircle={'icon'}
          circleColor={'white'}
          lineColor={colors.PRIMARY}
          circleSize={20}
          titleStyle={{
            color: colors.SECONDARY,
            fontFamily: fonts.SECONDARY,
          }}
          descriptionStyle={{
            color: ' black',
            fontFamily: fonts.SECONDARY,
          }}
        />
      </View>
      <Button
        title="View Online Menu"
        borderColor={colors.PRIMARY}
        style={{marginBottom: 20, marginHorizontal: 16}}
      />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 16,
  },
  image: {
    marginTop: -30,
  },
  logoTitle: {
    fontFamily: fonts.SECONDARY,
    fontSize: 24,
  },
  rating: {
    fontFamily: fonts.SECONDARY,
    color: colors.SECONDARY,
    fontSize: 12,
  },
  reviews: {
    fontFamily: fonts.SECONDARY,
    color: colors.SECONDARY,
    fontSize: 9,
  },
  titles: {
    fontFamily: fonts.SECONDARY,
    color: colors.SECONDARY,
    fontSize: 20,
  },
  paraText: {
    color: '#263238',
    fontFamily: fonts.PRIMARY,
    fontSize: 14,
  },
});
