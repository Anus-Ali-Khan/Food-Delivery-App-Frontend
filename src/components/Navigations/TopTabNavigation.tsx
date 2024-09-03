import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeDel from '../../images/homedel.svg';
import Pickup from '../../images/pickup.svg';
import HomeDelivery from '../../screens/userSite/HomeDelivery';
import PickupScreen from '../../screens/userSite/PickupScreen';
import {colors} from '../../utilities/constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();

enum tabsType {
  HomeDelivery = 'HomeDelivery',
  Pickup = 'Pickup',
}

const tabScreens = [
  {
    name: tabsType.HomeDelivery,
    component: HomeDelivery,
    img: <HomeDel height={80} width={80} />,
  },
  {
    name: tabsType.Pickup,
    component: PickupScreen,
    img: <Pickup height="100px" width="100px" />,
  },
];

const DeliveryOptions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [selectedTab, setSelectedTab] = useState<tabsType>(
    tabsType.HomeDelivery,
  );

  const handleNavigation = (name: tabsType) => {
    setSelectedTab(name);
    navigation.navigate(name);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white',
      }}>
      {tabScreens.map(tab => (
        <TouchableOpacity
          key={tab.name}
          style={[
            styles.tabStyles,
            {
              backgroundColor:
                selectedTab === tab.name ? colors.SECONDARY : 'transparent',
            },
          ]}
          onPress={() => handleNavigation(tab.name)}>
          {tab.img}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={tabsType.HomeDelivery}
      tabBar={() => <DeliveryOptions />}
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      {tabScreens.map(screen => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          key={screen.name}
          // options={{swipeEnabled: false}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  tabStyles: {
    width: 160,
    height: 123,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
});
