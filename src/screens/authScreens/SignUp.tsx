import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import {colors} from '../../utilities/constants';
import Button from '../../components/Button';
import {z, ZodType} from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ScrollView} from 'react-native-gesture-handler';

type FormDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
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
                value={value}
                name="confirmPassword"
                errors={errors}
              />
            )}
            name="confirmPassword"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
          <Text style={{margin: 'auto', width: '60%'}}>
            Have an account?{' '}
            <Text style={{textDecorationLine: 'underline'}}>Login instead</Text>
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
