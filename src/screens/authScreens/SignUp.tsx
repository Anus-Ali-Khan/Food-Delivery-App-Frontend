import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import {colors, fonts} from '../../utilities/constants';
import Button from '../../components/Button';
import {z, ZodType} from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ScrollView} from 'react-native-gesture-handler';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type FormDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigate = () => {
    navigation.navigate('Login');
  };

  const schema: ZodType<FormDataType> = z
    .object({
      name: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormDataType) => {
    console.log('IT WORKED', data);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{...styles.container}}>
        <Text style={styles.title}>Create Your Account</Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Your Name"
                onChangeText={onChange}
                value={value}
                name="name"
                errors={errors}
              />
            )}
            name="name"
          />

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

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Confirm Password"
                onChangeText={onChange}
                secureTextEntry={true}
                value={value}
                name="confirmPassword"
                errors={errors}
              />
            )}
            name="confirmPassword"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={handleSubmit(onSubmit)}
            borderColor={colors.PRIMARY}
            buttonStyle={styles.buttons}
          />
          <Text
            style={{margin: 'auto', width: '60%', fontFamily: fonts.PRIMARY}}>
            Have an account?{' '}
            <Text
              style={{
                textDecorationLine: 'underline',
                fontFamily: fonts.PRIMARY,
              }}
              onPress={handleNavigate}>
              Login Instead
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 50,
  },
  title: {
    marginHorizontal: 'auto',
    width: '85%',
    fontWeight: 'medium',
    fontSize: 42,
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
  buttons: {
    marginHorizontal: 16,
  },
});
