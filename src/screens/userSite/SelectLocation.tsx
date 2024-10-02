import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts, locationCards} from '../../utilities/constants';
import AddIcon from 'react-native-vector-icons/Octicons';
import CheckIcon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const SelectLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handlebNavigateToChooseLocation = () => {
    navigation.navigate('ChooseLocation');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
      <View style={{marginHorizontal: 16, marginVertical: 12}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{fontFamily: fonts.SECONDARY, color: 'black', fontSize: 22}}>
            Select Your Location
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 6}}
            onPress={handlebNavigateToChooseLocation}>
            <AddIcon name="diff-added" color={colors.PRIMARY} />
            <Text
              style={{
                fontSize: 10,
                fontFamily: fonts.PRIMARY,
                color: colors.SECONDARY,
              }}>
              Add location
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={locationCards}
          keyExtractor={item => item.id}
          style={{flexGrow: 0, height: '88%'}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelectedLocation(item.id)}
              style={{
                backgroundColor: '#DBDBDB',
                borderRadius: 12,
                marginTop: 12,
                flexDirection: 'row',
                gap: 8,
                padding: 8,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderWidth: item.id === selectedLocation ? 2 : 0,
                borderColor:
                  item.id === selectedLocation ? `${colors.SECONDARY}` : '',
              }}>
              <Image source={item.img} />
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.SECONDARY,
                    fontSize: 20,
                    color: colors.SECONDARY,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.PRIMARY,
                    fontSize: 11,
                    width: '90%',
                    marginVertical: 4,
                  }}>
                  {item.description}
                </Text>
              </View>
              {item.id === selectedLocation && (
                <CheckIcon
                  name="check-circle"
                  color={colors.SECONDARY}
                  style={{position: 'absolute', right: 12, top: 12}}
                />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
      <Button
        title="Done"
        borderColor="transparent"
        backgroundColor="#07BC49"
        textColor="black"
        style={{marginHorizontal: 16}}
      />
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({});
