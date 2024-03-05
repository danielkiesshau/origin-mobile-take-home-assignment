import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './routes';
import LocalStorage, {
  LocalStorageKeys,
} from './modules/libs/localStorage/localStorage';

export default function App() {
  const isSignedIn = LocalStorage.get(LocalStorageKeys.IS_SIGNED_IN) !== null;
  const CurrentStack = isSignedIn
    ? Stack.AuthenticatedStack
    : Stack.UnauthenticatedStack;

  return (
    <NavigationContainer>
      <CurrentStack />
    </NavigationContainer>
  );
}
