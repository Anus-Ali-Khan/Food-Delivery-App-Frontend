import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../utilities/constants';
import {z, ZodType} from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type FormDataType = {
  email: string;
  password: string;
};

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigateToSignUp = () => {
    navigation.goBack();
  };

  const handleNavigateToFp = () => {
    navigation.navigate('ForgotPassword');
  };

  const schema: ZodType<FormDataType> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({resolver: zodResolver(schema)});

  const onSubmit = (data: FormDataType) => {
    navigation.navigate('DrawerNavigation');
    console.log('IT WORKED', data);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{...styles.container}}>
        <Text style={styles.title}>Great to have you Back!</Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Your Email"
                onChangeText={onChange}
                value={value}
                name="email"
                errors={errors}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Password"
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                name="password"
                errors={errors}
              />
            )}
            name="password"
          />

          <Text
            style={{
              alignSelf: 'flex-end',
              marginTop: -8,
              fontFamily: fonts.PRIMARY,
            }}
            onPress={handleNavigateToFp}>
            Forgot Password?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
          <Text
            style={{margin: 'auto', width: '70%', fontFamily: fonts.PRIMARY}}>
            Don't have an account?{' '}
            <Text
              style={{textDecorationLine: 'underline'}}
              onPress={handleNavigateToSignUp}>
              SignUp Instead
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 80,
  },
  title: {
    marginHorizontal: 'auto',
    width: '85%',
    fontSize: 42,
    fontWeight: 'medium',
    color: colors.SECONDARY,
    fontFamily: fonts.PRIMARY,
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
