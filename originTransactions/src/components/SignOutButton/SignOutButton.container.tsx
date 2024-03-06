import React, {useContext} from 'react';
import {AuthContext} from '@modules/contexts/AuthContext';
import ButtonNative from '@components/Button/Button.native';
import AuthService from '@modules/services/Auth/AuthService';

const SignOutButton = () => {
  const [_, setSignedIn] = useContext(AuthContext);

  const signOut = () => {
    const service = new AuthService();
    service.exit();
    setSignedIn(false);
  };

  return <ButtonNative onPress={signOut} label="Log-Out" />;
};

export default SignOutButton;
