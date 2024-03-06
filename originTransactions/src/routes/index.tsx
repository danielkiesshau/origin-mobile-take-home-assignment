import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes, {RootStackParamList} from './Routes';
import TransactionsContainer from '@pages/Transactions/Transactions.container';
import TransactionDetailsContainer from '@pages/TransactionDetails/TransactionDetails.container';
import SignInContainer from '@pages/SignIn/SignIn.container';
import SignUpContainer from '@pages/SignUp/SignUp.container';
import SignOutButton from '@components/SignOutButton/SignOutButton.container';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import {TransactionsContext} from '@modules/contexts/TransactionsContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  return (
    <>
      <TransactionsContext.Provider value={[transactions, setTransactions]}>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.TRANSACTIONS}
            component={TransactionsContainer}
            options={{
              headerRight: SignOutButton,
            }}
          />
          <Stack.Screen
            name={Routes.TRANSACTION_DETAILS}
            component={TransactionDetailsContainer}
          />
        </Stack.Navigator>
      </TransactionsContext.Provider>
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
