import React from 'react';
import * as yup from 'yup';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import AuthService from '@modules/services/Auth/AuthService';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Routes, {RootStackParamList} from '@routes/Routes';
import SignInNative from './SignUp.native';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Provide a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should have at least 6 characters'),
  username: yup
    .string()
    .required('Username is required')
    .min(6, 'Username should have at least 6 characters'),
});

export type SignInForm = {
  email: string;
  password: string;
  username: string;
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.SIGN_UP>;
}

function SignInContainer({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onPressSend = (formData: SignInForm) => {
    const service = new AuthService();

    service.signUp(formData.email, formData.password, formData.username);

    Alert.alert('Success', 'User created, now login with your credentials');

    navigation.goBack();
  };

  return (
    <SignInNative
      errors={errors}
      control={control}
      handleSubmit={handleSubmit(onPressSend)}
    />
  );
}

export default SignInContainer;
