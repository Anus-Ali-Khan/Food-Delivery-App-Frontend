import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, RestaurantLists} from '../../utilities/constants';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import HamMenu from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import RestaurantCards from '../../components/RestaurantCards';
import Input from '../../components/Input';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchIcon name="search" size={16} style={{color: 'black'}} />
        <Input
          placeholder="Search Restaurants"
          name="Search"
          inputStyles={{padding: 0, width: '100%', borderColor: colors.PRIMARY}}
        />
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

  searchBar: {
    marginVertical: 14,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
