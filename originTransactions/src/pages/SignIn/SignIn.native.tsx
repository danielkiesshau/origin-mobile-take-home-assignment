import React from 'react';
import {Control, FieldErrors} from 'react-hook-form';
import {View} from 'react-native';
import Input from '@components/Input/Input.native';
import Button from '@components/Button/Button.native';
import {SignInForm} from './SignIn.container';

interface Props {
  control: Control<SignInForm>;
  errors: FieldErrors<SignInForm>;
  handleSubmit: () => void;
  goToRegister: () => void;
}
function SignInNative({control, errors, handleSubmit, goToRegister}: Props) {
  return (
    <View style={{flex: 1}}>
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
      <Button label="LogIn" onPress={handleSubmit} />
      <Button label="Register" onPress={goToRegister} />
    </View>
  );
}

export default SignInNative;
