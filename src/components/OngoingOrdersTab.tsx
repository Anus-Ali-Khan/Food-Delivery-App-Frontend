import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, OngoingOrdersList} from '../utilities/constants';
import {FlatList} from 'react-native-gesture-handler';
import OrdersCards from './OrdersCards';

const OngoingOrdersTab = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: fonts.PRIMARY,
          fontSize: 22,
          color: 'black',
          paddingTop: 12,
        }}>
        Ongoing Orders
      </Text>

      <FlatList
        data={OngoingOrdersList}
        renderItem={({item}) => (
          <OrdersCards
            id={item.id}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            img={item.img}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default OngoingOrdersTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
