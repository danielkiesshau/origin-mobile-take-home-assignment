import {Transaction} from '@dtos/Transactions/TransactionDTO';
import TransactionsServiceI from '@src/modules/services/Transactions/interfaces/TransactionsService';
import LocalStorage, {LocalStorageKeys} from '@libs/localStorage/localStorage';

export interface TransactionResponseAPI {
  Id: number;
  Amount: number;
  Date: string;
  Vendor: string;
  Type: string;
  Category: string;
  Lat: number;
  Lon: number;
  ReceiptImage: string;
}

export interface TransactionsResponseAPI {
  data: {
    Page: number;
    PageSize: number;
    TotalRecords: number;
    TotalPages: number;
    Transactions: TransactionResponseAPI[];
  };
}

export default class OfflineTransactionsService
  implements TransactionsServiceI
{
  private pageSize = 50;
  private transactions: Transaction[];

  public constructor() {
    this.transactions = this.getOfflineTransactions();
  }

  private getOfflineTransactions(): Transaction[] {
    return LocalStorage.get<Transaction[]>(LocalStorageKeys.TRANSACTIONS) || [];
  }

  async getTransactions(page: number): Promise<Transaction[]> {
    return this.transactions.slice(0, this.pageSize * page);
  }

  async updateTransactionLocation(id: number, lat: number, lon: number) {
    const transaction = this.transactions.find(t => t.id === id);

    if (transaction) {
      transaction.lat = lat;
      transaction.lon = lon;
    }

    LocalStorage.set(LocalStorageKeys.TRANSACTIONS, this.transactions);
  }
}
