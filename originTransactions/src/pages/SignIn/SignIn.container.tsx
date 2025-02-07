import React, {useContext, useEffect} from 'react';
import * as yup from 'yup';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import AuthService from '@modules/services/Auth/AuthService';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Routes, {RootStackParamList} from '@routes/Routes';
import {AuthContext} from '@modules/contexts/AuthContext';
import SignInNative from './SignIn.native';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Provide a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should have at least 6 characters'),
});

export type SignInForm = {
  email: string;
  password: string;
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.SIGN_IN>;
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
  const [isSignedIn, setSignedIn] = useContext(AuthContext);

  const onPressSend = (formData: SignInForm) => {
    const service = new AuthService();

    const success = service.signIn(formData.email, formData.password);

    if (!success) {
      Alert.alert('Error', 'Invalid credentials');
      return;
    }
    setSignedIn(true);
  };

  useEffect(() => {
    if (isSignedIn) {
      navigation.navigate(Routes.TRANSACTIONS);
    }
  }, [isSignedIn]);

  const goToRegister = () => {
    navigation.navigate(Routes.SIGN_UP);
  };

  return (
    <SignInNative
      errors={errors}
      control={control}
      goToRegister={goToRegister}
      handleSubmit={handleSubmit(onPressSend)}
    />
  );
}

export default SignInContainer;
