import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import TransactionsContainer from '@pages/Transactions/Transactions.container';
import TransactionDetailsContainer from '@pages/TransactionDetails/TransactionDetails.container';
import SignInContainer from '@pages/SignIn/SignIn.container';
import SignUpContainer from '@pages/SignUp/SignUp.container';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.TRANSACTIONS}
          component={TransactionsContainer}
        />
        <Stack.Screen
          name={Routes.TRANSACTION_DETAILS}
          component={TransactionDetailsContainer}
        />
      </Stack.Navigator>
    </>
  );
};

const UnauthenticatedStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={Routes.SIGN_IN}>
        <Stack.Screen name={Routes.SIGN_IN} component={SignInContainer} />
        <Stack.Screen name={Routes.SIGN_UP} component={SignUpContainer} />
      </Stack.Navigator>
    </>
  );
};

export default {
  AuthenticatedStack,
  UnauthenticatedStack,
};
