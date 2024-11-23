import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RestaurantLogo from '../../images/restaurantImage.svg';
import {colors, fonts, myCartList} from '../../utilities/constants';
import CancelIcon from 'react-native-vector-icons/AntDesign';
import CustomRadioButton from '../../components/CustomRadioButton';
import ForwardIcon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomModal from '../../components/CustomModal';
import OrderModal from '../../components/OrderModal';

const restaurant = {
  id: '1',
  title: 'Thai Cuisine',
  description: 'Deliver in 30mins',
  rating: '⭐4.1',
  img: <RestaurantLogo height="50px" width="54px" />,
};

enum deliveryMode {
  HomeDelivery = 'FomeDelivery',
  Pickup = 'Pickup',
}

enum paymentMethod {
  COD = 'COD',
  Card = 'Card',
}

const MyCart = ({route}: any) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | undefined
  >();
  const [selectedDeliveryMode, setSelectedDeliveryMode] = useState<
    string | undefined
  >();

  const [openModal, setOpenModal] = useState<boolean>(false);

  //Get the param
  const {
    source = {latitude: 0, longitude: 0},
    destination = {latitude: 0, longitude: 0},
  } = route.params || {};
  console.log(destination);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateToMyCards = () => {
    if (
      selectedPaymentMethod === 'Card' &&
      selectedDeliveryMode &&
      destination.latitude !== 0
    ) {
      navigation.navigate('MyCards');
    }
    if (
      selectedPaymentMethod === 'COD' &&
      selectedDeliveryMode &&
      destination?.latitude !== 0
    ) {
      setOpenModal(true);
    }
    console.log(destination?.latitude);
    if (
      !(selectedDeliveryMode || selectedPaymentMethod) ||
      destination?.latitude === 0
    ) {
      Alert.alert(
        'Error',
        `Please select ${
          !selectedDeliveryMode
            ? 'Delivery Mode'
            : !selectedPaymentMethod
            ? 'Payment Method'
            : 'delivery address'
        } `,
      );
    }
  };

  const handleNavigateToSelectLocation = () => {
    navigation.navigate('SelectLocation');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        {restaurant.img}
        <View>
          <Text style={styles.title}>{restaurant.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text style={styles.description}>{restaurant.description}</Text>
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerBar}>
        <Text style={styles.headerBarTitle}>Your Order Details</Text>
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
                <View
                  style={[
                    {
                      backgroundColor: colors.SECONDARY,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                    styles.addToCartContainer,
                  ]}>
                  <View style={styles.addToCartContainer}>
                    <Text
                      style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                      -
                    </Text>
                    <Text
                      style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                      1
                    </Text>
                  </View>
                  <Text style={[styles.addToCartText, {paddingHorizontal: 4}]}>
                    +
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <CancelIcon name="close" size={18} />
              <Text
                style={{
                  color: colors.SECONDARY,
                  fontFamily: fonts.SECONDARY,
                  fontSize: 16,
                }}>
                ${item.price}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.headerBar}>
        <Text style={styles.headerBarTitle}>Price Details</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.headingStyle}>Total (2 items)</Text>
        <Text style={styles.headingStyle}>$11.99</Text>
      </View>
      <View style={[styles.priceContainer]}>
        <Text style={styles.headingStyle}>Delivery Mode</Text>
        <CustomRadioButton
          selectedId={selectedDeliveryMode}
          setSelectedId={setSelectedDeliveryMode}
          options={[
            {
              id: 'Home Delivery',
              label: 'Home Delivery',
              value: 'Home Delivery',
              borderColor: colors.PRIMARY,
              color: colors.SECONDARY,
              size: 16,
            },
            {
              id: 'Pickup',
              label: 'Pickup',
              value: 'Pickup',
              borderColor: colors.PRIMARY,
              color: colors.SECONDARY,
              size: 16,
            },
          ]}
        />
      </View>
      <View style={[styles.priceContainer]}>
        <Text style={styles.headingStyle}>Payment method</Text>
        <CustomRadioButton
          selectedId={selectedPaymentMethod}
          setSelectedId={setSelectedPaymentMethod}
          options={[
            {
              id: 'COD',
              label: 'COD',
              value: 'COD',
              borderColor: colors.PRIMARY,
              color: colors.SECONDARY,
              size: 16,
            },
            {
              id: 'Card',
              label: 'Card',
              value: 'Card',
              borderColor: colors.PRIMARY,
              color: colors.SECONDARY,
              size: 16,
            },
          ]}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#D1D1D1',
          flexDirection: 'column',
          gap: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.headingStyle}>Add address</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}
            onPress={handleNavigateToSelectLocation}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.SECONDARY,
                color: 'black',
              }}>
              Select locations
            </Text>
            <ForwardIcon
              name="chevron-forward"
              color={colors.PRIMARY}
              size={16}
            />
          </TouchableOpacity>
        </View>

        <Input
          placeholder="Type here"
          inputStyles={{paddingVertical: 4}}
          numberOfLines={2}
          value={
            source && destination
              ? `\nDestination: \nLatitude: ${destination.latitude}, Longitude: ${destination.longitude}`
              : ''
          }
        />
      </View>
      <View
        style={{
          marginHorizontal: 16,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#D1D1D1',
        }}>
        <Text>Add special instructions or allergy notes here</Text>
      </View>
      <Button
        title="Place Order to Thai Cuisine"
        borderColor="transparent"
        textColor={colors.SECONDARY}
        textStyle={{fontFamily: fonts.SECONDARY}}
        style={{marginHorizontal: 16, marginTop: 12}}
        onPress={handleNavigateToMyCards}
      />
      {openModal && (
        <CustomModal
          isOpen={openModal}
          children={<OrderModal setOpenModal={setOpenModal} />}
        />
      )}
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  flatList: {
    height: '23.5%',
    flexGrow: 0,
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
  addToCartContainer: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
  },
  addToCartText: {
    color: 'white',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
  },
  headingStyle: {
    fontFamily: fonts.SECONDARY,
    color: 'black',
    fontSize: 18,
  },
});
