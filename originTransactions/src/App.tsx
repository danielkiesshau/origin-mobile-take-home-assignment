import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './routes';

export default function App() {
  // TODO: implement auth
  const isSignedIn = true;
  const CurrentStack = isSignedIn
    ? Stack.AuthenticatedStack
    : Stack.UnauthenticatedStack;

  return (
    <NavigationContainer>
      <CurrentStack />
    </NavigationContainer>
  );
}
