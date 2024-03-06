import {createContext} from 'react';
import {Transaction} from '@dtos/Transactions/TransactionDTO';

export const TransactionsContext = createContext<[Transaction[], Function]>([
  [],
  () => {},
]);
