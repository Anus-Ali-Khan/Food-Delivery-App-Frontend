import {
  Image,
  PermissionsAndroid,
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
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomHeader from '../CustomHeader';
import TopTabNavigation from './TopTabNavigation';
import {colors, fonts} from '../../utilities/constants';
import LogoutModal from '../LogoutModal';
import Info from '../../screens/userSite/Info';
import CameraIcon from 'react-native-vector-icons/Feather';
import Settings from '../../screens/userSite/Settings';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import {
  NavigationContainer,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import CustomModal from '../CustomModal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CameraModal from '../CameraModal';
import Orders from '../../screens/userSite/Orders';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string>('');
  const [openLogoutModal, setOpenLogoutModal] = useState<boolean>(false);

  const handleCamera = async () => {
    setOpenModal(false);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera({
          mediaType: 'photo',
          cameraType: 'back',
        });

        if ((result.assets ?? []).length > 0) {
          const photo = (result.assets ?? [])[0]?.originalPath;
          setPhoto(photo as string);
        }

        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleGallery = async () => {
    setOpenModal(false);
    try {
      const grantedGallery = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Gallery Permission',
          message: 'App needs access to your photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (grantedGallery === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Gallery permission given');
        const result = await launchImageLibrary({mediaType: 'photo'});
        if ((result.assets ?? []).length > 0) {
          const photo = (result.assets ?? [])[0]?.uri;
          setPhoto(photo as string);
        }
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleOpenLogoutModal = () => {
    setOpenLogoutModal(true);
  };

  return (
    <>
      {openModal && (
        <CustomModal
          isOpen={openModal}
          children={
            <CameraModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleCamera={handleCamera}
              handleGallery={handleGallery}
            />
          }
        />
      )}
      {openLogoutModal && (
        <CustomModal
          isOpen={openLogoutModal}
          children={
            <LogoutModal
              openLogoutModal={openLogoutModal}
              setOpenLogoutModal={setOpenLogoutModal}
            />
          }
        />
      )}

      <Drawer.Navigator
        initialRouteName="TopTabNavigation"
        drawerContent={props => {
          return (
            <SafeAreaView style={{flex: 1}}>
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
                      }}
                      onPressIn={() => setOpenModal(true)}>
                      <CameraIcon name="camera" color={'white'} />
                    </TouchableOpacity>
                    <View
                      style={{
                        width: 170,
                        height: 170,
                        backgroundColor: 'white',
                        borderRadius: '100%',
                      }}>
                      <Image
                        source={{
                          uri: photo
                            ? photo
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s',
                        }}
                        height={170}
                        width={170}
                        borderRadius={100}
                      />
                    </View>
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
                <DrawerItem
                  label={'Logout'}
                  labelStyle={{
                    fontSize: 16,
                    fontFamily: `${fonts.SECONDARY}`,
                    fontWeight: 'bold',
                  }}
                  style={{
                    backgroundColor: `${colors.PRIMARY}`,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  // pressColor=''
                  activeBackgroundColor={colors.SECONDARY}
                  activeTintColor="white"
                  inactiveTintColor={colors.SECONDARY}
                  onPress={handleOpenLogoutModal}
                />
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
          initialParams={{orderStatus: true}}
          component={Orders}
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
          name="Settings"
          component={Settings}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: fonts.SECONDARY,
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    height: 160,
    width: 250,
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ModaltextStyle: {
    fontFamily: fonts.SECONDARY,
  },
});
