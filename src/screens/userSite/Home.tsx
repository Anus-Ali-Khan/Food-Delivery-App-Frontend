import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors, fonts, RestaurantLists} from '../../utilities/constants';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import HamMenu from 'react-native-vector-icons/Ionicons';
import HomeDel from '../../assets/images/homedel.svg';
import Pickup from '../../assets/images/pickup.svg';
import {FlatList} from 'react-native-gesture-handler';
import RestaurantCards from '../../components/RestaurantCards';

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <View style={styles.homeDelCard}>
          <HomeDel height="80px" width="80px" />
        </View>
        <View style={styles.pickupCard}>
          <Pickup height="100px" width="100px" />
        </View>
      </View>

      <View style={styles.searchBar}>
        <SearchIcon name="search" size={16} style={{color: 'black'}} />
        <Text style={{fontFamily: fonts.PRIMARY}}>Search Restaurants</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={{fontFamily: fonts.PRIMARY, fontSize: 22, color: 'black'}}>
          Restaurants
        </Text>
        <HamMenu name="menu" size={22} style={{color: colors.SECONDARY}} />
      </View>

      <View>
        <FlatList
          data={RestaurantLists}
          renderItem={({item}) => (
            <RestaurantCards
              id={item.id}
              title={item.title}
              description={item.description}
              rating={item.rating}
              img={item.img}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
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
    width: 160,
    height: 123,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },

  searchBar: {
    marginVertical: 14,
    padding: 12,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
