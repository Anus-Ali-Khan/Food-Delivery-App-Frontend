import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RestaurantLogo from '../../images/restaurantImage.svg';
import CallIcon from '../../images/Vector.svg';
import {
  colors,
  deliveryTimeData,
  fonts,
  myCartList,
} from '../../utilities/constants';
import ForwardIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import Timeline from 'react-native-timeline-flatlist';
import TimelineDividerSvg from '../../images/timelineDivider/OrderStatus/Rectangle78.svg';

const RestaurantDetails = {
  img: <RestaurantLogo height="50px" width="54px" />,
  title: 'Thai Cusine',
  description: 'Delivers in 30 mins',
  rating: '⭐4.1',
};

const OrderStatus = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          alignItems: 'center',
        }}>
        <View style={styles.cardContainer}>
          {RestaurantDetails.img}
          <View>
            <Text style={styles.title}>{RestaurantDetails.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={styles.description}>
                {RestaurantDetails.description}
              </Text>
              <Text style={styles.rating}>{RestaurantDetails.rating}</Text>
            </View>
          </View>
        </View>
        <CallIcon />
      </View>
      <View style={styles.headerBar}>
        <Text style={styles.headerBarTitle}>Order Details</Text>
      </View>
      <FlatList
        data={myCartList}
        keyExtractor={item => item.id}
        style={styles.flatList}
        renderItem={({item}) => (
          <View
            style={{
              paddingHorizontal: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 12,
              borderBottomWidth: !(parseInt(item.id) === myCartList.length)
                ? 1
                : 0,
              borderBottomColor: '#D1D1D1',
              // backgroundColor: 'yellow',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  // borderRadius: 16,
                  // backgroundColor: 'red',
                }}>
                <Image source={item.img} style={styles.img} />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 4,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.SECONDARY,
                    fontSize: 18,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.SECONDARY,
                    fontFamily: fonts.SECONDARY,
                  }}>
                  {item.quantity}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.headingStyle}>Total </Text>
        <Text style={styles.headingStyle}>$11.99</Text>
      </View>
      <View
        style={[
          styles.headerBar,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={styles.headerBarTitle}>Order Status</Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: colors.PRIMARY, fontSize: 11}}>
            Get directions
          </Text>
          <ForwardIcon
            name="chevron-forward"
            color={colors.PRIMARY}
            size={11}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          // flex: 1,
          marginTop: 24,
        }}>
 

        {deliveryTimeData.map((item, index) => (
          <View key={item.title} style={{marginLeft: 20}}>
            <Text
              style={{
                color: index===deliveryTimeData.length - 1
                  ? '#C7C7C7'
                  : colors.SECONDARY,
                fontFamily: fonts.SECONDARY,
                fontSize: 20,
              }}>
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                marginBottom: 8,
              }}>
              {item.icon}
              <Text
                style={{
                  color: '#263238',
                  fontFamily: fonts.SECONDARY,
                  fontSize: 14,
                }}>
                {item.description}
              </Text>
            </View>
            {index === deliveryTimeData.length - 1 ? (
              <View></View>
            ) : (
              <View style={{marginBottom: 8,marginLeft:4}}>
              <TimelineDividerSvg />
              </View>
            )}
          </View>
        ))}
          <Button
        title="15 Minutes to Deliver"
        borderColor={colors.PRIMARY}
        style={{marginTop: 20, marginHorizontal: 16}}
        textColor='black'
        
      
      />
      </View>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
    fontSize: 8,
    color: colors.TERTIARY,
  },
  headerBarTitle: {
    fontFamily: fonts.SECONDARY,
    fontSize: 20,
    color: 'white',
  },
  headerBar: {
    backgroundColor: colors.SECONDARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  img: {
    height: 60,
    width: 60,
    resizeMode: 'center',
    // borderRadius: 20,
  },
  flatList: {
    height: '23.5%',
    flexGrow: 0,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headingStyle: {
    fontFamily: fonts.SECONDARY,
    color: 'black',
    fontSize: 18,
  },
});
