import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../utilities/constants';
import {Controller, useForm} from 'react-hook-form';
import Input from '../../components/Input';
import {z, ZodType} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Button from '../../components/Button';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type FormDataType = {
  email: string;
};

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigate = () => {
    navigation.navigate('ChangePassword');
  };

  const schema: ZodType<FormDataType> = z.object({
    email: z.string().email(),
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
          <Text style={{marginTop: 10, fontFamily: fonts.PRIMARY}}>
            We’ve sent an verification message to your email. Kindly click “Yes”
            to proceed.
          </Text>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <Button title="Verify Email" onPress={handleNavigate} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;

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
  },
});
