import React from 'react';
import {Control, FieldErrors} from 'react-hook-form';
import {View} from 'react-native';
import Input from '@components/Input/Input.native';
import {SignInForm} from './SignIn.container';
import Styled from './SignIn.styles';

interface Props {
  control: Control<SignInForm>;
  errors: FieldErrors<SignInForm>;
  handleSubmit: () => void;
  goToRegister: () => void;
}
function SignInNative({control, errors, handleSubmit, goToRegister}: Props) {
  return (
    <View>
      <Input
        isRequired
        error={errors.email?.message}
        control={control}
        name="email"
        placeholder="Email"
      />
      <Input
        isRequired
        isSensitiveData
        error={errors.password?.message}
        control={control}
        name="password"
        placeholder="Password"
      />
      <Styled.ActionButton label="LogIn" onPress={handleSubmit} />
      <Styled.ActionButton label="Register" onPress={goToRegister} />
    </View>
  );
}

export default SignInNative;
