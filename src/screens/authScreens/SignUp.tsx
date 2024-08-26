import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import {colors} from '../../utilities/constants';
import Button from '../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', gap: 50}}>
        <Text style={styles.title}>Create Your Account</Text>
        <View style={styles.inputContainer}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" />
          <Text style={{margin: 'auto', width: '60%'}}>
            Have an account?{' '}
            <Text style={{textDecorationLine: 'underline'}}>Login instead</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 'auto',
    width: '85%',
    fontSize: 42,
    color: colors.SECONDARY,
  },
  inputContainer: {
    marginHorizontal: 'auto',
    width: '85%',
    gap: 20,
  },

  buttonContainer: {
    gap: 10,
  },
});
