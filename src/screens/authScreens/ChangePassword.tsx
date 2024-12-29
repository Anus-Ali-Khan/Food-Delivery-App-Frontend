import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utilities/constants';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {zodResolver} from '@hookform/resolvers/zod';
import {z, ZodType} from 'zod';

type FormDataType = {
  email: string;
  newPassword: string;
};

const ChangePassword = () => {
  const schema: ZodType<FormDataType> = z.object({
    email: z.string().email(),
    newPassword: z.string().min(5).max(20),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({resolver: zodResolver(schema)});

  const onSubmit = (data: FormDataType) => {
    console.log('IT WORKED', data);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{...styles.container}}>
        <Text style={styles.title}>Forgot Password</Text>
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
                placeholder="Enter new password"
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                name="newPassword"
                errors={errors}
              />
            )}
            name="newPassword"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Change Password"
            onPressIn={handleSubmit(onSubmit)}
            borderColor={colors.PRIMARY}
            buttonStyle={styles.buttons}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    marginHorizontal: 'auto',
    width: '85%',
    fontSize: 44,
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
  buttons: {
    marginHorizontal: 16,
  },
});
