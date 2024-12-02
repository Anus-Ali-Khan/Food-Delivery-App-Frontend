import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import CustomHeader from '../CustomHeader';
import TopTabNavigation from './TopTabNavigation';
import {colors, fonts} from '../../utilities/constants';
import LogoutModal from '../LogoutModal';
import Info from '../../screens/userSite/Info';
import UserPicSvg from '../../images/userPic/Home/Ellipse45.svg';
import EditIcon from 'react-native-vector-icons/Feather';
import Settings from '../../screens/userSite/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TopTabNavigation"
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 28,
                marginBottom: 24,
              }}>
              <View>
                <View style={{position:'absolute',backgroundColor:colors.SECONDARY,borderRadius:65,padding:8,bottom:0,right:30,zIndex:1}}>
                  
                <EditIcon name="edit-2" color={'white'}  />
                </View>
                <UserPicSvg />
              </View>
              <Text
                style={{
                  fontSize: 26,
                  color: colors.SECONDARY,
                  fontFamily: fonts.SECONDARY,
                  marginTop: 10,
                }}>
                Abu Bin Hayan
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: `${colors.PRIMARY}`,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
        drawerItemStyle: {
          backgroundColor: `${colors.SECONDARY}`,
        },
        drawerLabelStyle: {
          color: 'white',
          fontSize: 16,
          fontFamily: `${fonts.SECONDARY}`,
        },
        drawerActiveTintColor: 'blue',
      }}>
      <Drawer.Screen
        name="Home"
        component={TopTabNavigation}
        options={{
          headerTitle: props => <CustomHeader />,
          headerTitleContainerStyle: {width: '100%'},
        }}
      />
      <Drawer.Screen
        name="Order"
        component={TopTabNavigation}
        options={{
          headerTitle: props => <CustomHeader />,
          headerTitleContainerStyle: {width: '100%'},
        }}
      />
      <Drawer.Screen
        name="Info"
        component={Info}
        options={{
          headerTitle: props => <CustomHeader />,
          headerTitleContainerStyle: {width: '100%'},
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutModal}
        options={
          {
            //   headerTitle: props => <CustomHeader />,
            //   headerTitleContainerStyle: {width: '100%'},
          }
        }
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={
          {
            //   headerTitle: props => <CustomHeader />,
            //   headerTitleContainerStyle: {width: '100%'},
          }
        }
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
