import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomHeader from '../CustomHeader';
import TopTabNavigation from './TopTabNavigation';
import {colors, fonts} from '../../utilities/constants';
import LogoutModal from '../LogoutModal';
import Info from '../../screens/userSite/Info';
import UserPicSvg from '../../images/userPic/Home/Ellipse45.svg';
import CameraIcon from 'react-native-vector-icons/Feather';
import Settings from '../../screens/userSite/Settings';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {hasPermission, requestPermission} = useCameraPermission();
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const device = useCameraDevice('back');
  if (device == null) return <Text>No devices</Text>;

  const handleCamera = async () => {
    if (!hasPermission) {
      await requestPermission();
    }
    setIsCameraOpen(!isCameraOpen);
    // navigation.navigate('Camera', {isCameraOpen: true});
  };

  return (
    <Drawer.Navigator
      initialRouteName="TopTabNavigation"
      drawerContent={props => {
        return (
          <SafeAreaView style={{flex: 1}}>
             {isCameraOpen && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isCameraOpen}
          // resizeMode='contain'
        />
      )}
            <DrawerContentScrollView>
              <View
                style={{
                  height: 200,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 40,
                  marginBottom: 24,
                }}>
                <View>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      backgroundColor: colors.SECONDARY,
                      borderRadius: 65,
                      padding: 8,
                      bottom: 0,
                      right: 30,
                      zIndex: 1,
                    }}>
                    <CameraIcon
                      name="camera"
                      color={'white'}
                      onPress={handleCamera}
                    />
                  </TouchableOpacity>
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
            </DrawerContentScrollView>
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <SettingsIcon
                name="settings-sharp"
                color={colors.SECONDARY}
                size={25}
              />
              <Text
                style={{
                  color: colors.SECONDARY,
                  fontSize: 20,
                  fontFamily: fonts.SECONDARY,
                }}>
                Settings
              </Text>
            </TouchableOpacity>
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
          // backgroundColor: `${colors.SECONDARY}`,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: `${fonts.SECONDARY}`,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: `${colors.SECONDARY}`,
        drawerInactiveTintColor: `${colors.SECONDARY}`,
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
      <Drawer.Screen name="Logout" component={LogoutModal} />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
