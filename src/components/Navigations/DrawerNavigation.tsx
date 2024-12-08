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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [photo,setPhoto] = useState<string>()

  const handleCamera = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "App Camera Permission",
            message:"App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const result = await launchCamera({
            mediaType: 'photo',
            cameraType: 'back',
          });
          if(result){
            const photo = (result.assets ?? [])[0].uri 
            setPhoto(photo)
          }
          console.log("Camera permission given");
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    
 
  };

  return (
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
                    }}>
                    <CameraIcon
                      name="camera"
                      color={'white'}
                      onPress={handleCamera}
                    />
                  </TouchableOpacity>
                  <View style={{width:170,height:170,backgroundColor:'white',borderRadius:'100%'}}>

                  <Image src={photo} height={170} width={170} />
                  </View>
                  {/* <UserPicSvg /> */}
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
