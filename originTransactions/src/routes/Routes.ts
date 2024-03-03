import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';

enum Routes {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  TRANSACTIONS = 'transactions',
  TRANSACTION_DETAILS = 'transactions-details',
}

export type RootStackParamList = {
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP]: undefined;
  [Routes.TRANSACTIONS]: undefined;
  [Routes.TRANSACTION_DETAILS]: {
    transaction: Transaction;
  };
};

export default Routes;
