import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '@routes/index';
import LocalStorage, {
  LocalStorageKeys,
} from '@modules/libs/localStorage/localStorage';
import {AuthContext} from '@modules/contexts/AuthContext';

export default function App() {
  const [isSignedIn, setSignedIn] = useState<boolean>(
    LocalStorage.get(LocalStorageKeys.IS_SIGNED_IN) !== null,
  );
  const CurrentStack = isSignedIn
    ? Stack.AuthenticatedStack
    : Stack.UnauthenticatedStack;

  return (
    <NavigationContainer>
      <AuthContext.Provider value={[isSignedIn, setSignedIn]}>
        <CurrentStack />
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
