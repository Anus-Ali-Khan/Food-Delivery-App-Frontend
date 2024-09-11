import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReviewModal = () => {
  return (
    <View style={styles.container}>
      <Text>How's the food from Thai Cuisine?</Text>
    </View>
  );
};

export default ReviewModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    width: '90%',
    padding: 4,
    borderRadius: 12,
    position: 'absolute',
    bottom: 50,
    marginHorizontal: 16,
  },
});
