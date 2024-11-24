import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, HistoryOrdersList} from '../utilities/constants';
import HistoryOrdersCard from './HistoryOrdersCard';

const HistoryOrdersTab = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: fonts.PRIMARY,
          fontSize: 22,
          color: 'black',
          paddingTop: 12,
        }}>
        Orders History
      </Text>

      <FlatList
        data={HistoryOrdersList}
        renderItem={({item}) => (
          <HistoryOrdersCard
            id={item.id}
            title={item.title}
            price={item.price}
            orderDate={item.orderDate}
            img={item.img}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HistoryOrdersTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
