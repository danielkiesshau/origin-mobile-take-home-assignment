import {Transaction} from '@dtos/Transactions/TransactionDTO';

export default interface TransactionsServiceI {
  getTransactions(page: number): Promise<Transaction[]>;
  updateTransactionLocation(
    id: number,
    lat: number,
    lon: number,
  ): Promise<void>;
}
