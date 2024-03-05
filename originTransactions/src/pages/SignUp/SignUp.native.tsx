import React from 'react';
import {Control, FieldErrors} from 'react-hook-form';
import {View} from 'react-native';
import Input from '@components/Input/Input.native';
import Button from '@components/Button/Button.native';
import {SignInForm} from './SignUp.container';

interface Props {
  control: Control<SignInForm>;
  errors: FieldErrors<SignInForm>;
  handleSubmit: () => void;
}

function SignInNative({control, errors, handleSubmit}: Props) {
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
      <Input
        isRequired
        error={errors.username?.message}
        control={control}
        name="username"
        placeholder="Username"
      />
      <Button label="Register" onPress={handleSubmit} />
    </View>
  );
}

export default SignInNative;
