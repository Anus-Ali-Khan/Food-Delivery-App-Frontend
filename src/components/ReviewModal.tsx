import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Button from './Button';
import {colors, fonts} from '../utilities/constants';

type PropsType = {
  setOpenReviewModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReviewModal = ({setOpenReviewModal}: PropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How's the food from Thai Cuisine?</Text>
      <Text style={{fontSize: 30}}>⭐⭐⭐⭐⭐</Text>
      <TextInput
        placeholder="Write review here (optional)"
        multiline={true}
        numberOfLines={4}
        style={styles.textArea}
      />
      <Button
        title="Submit"
        backgroundColor={colors.SECONDARY}
        textColor="white"
        borderColor="transparent"
        style={{width: '90%', paddingVertical: 6, marginTop: 8}}
      />
      <TouchableOpacity onPress={() => setOpenReviewModal(false)}>
        <Text style={{fontSize: 15, color: 'black', fontFamily: fonts.PRIMARY}}>
          I'll do it later
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
    height: 350,
    gap: 6,
  },
  title: {
    fontFamily: fonts.SECONDARY,
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    width: '80%',
  },
  textArea: {
    borderColor: '#C7C7C7',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 6,
    height: 120,
    textAlignVertical: 'top',
  },
});
