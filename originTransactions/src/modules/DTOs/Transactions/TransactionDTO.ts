import {TransactionResponseAPI} from '@services/Transactions/TransactionsService';

export interface Transaction {
  id: number;
  amount: number;
  date: string;
  vendor: string;
  type: TransactionType;
  category: string;
  lat: number;
  lon: number;
  receiptImage: string;
}

export enum TransactionType {
  INVOICE = 'invoice',
  WITHDRAWAL = 'withdrawal',
  DEPOSIT = 'deposit',
  PAYMENT = 'payment',
}

export default class TransactionDTO {
  public static parse(data: TransactionResponseAPI): Transaction {
    return {
      id: data.Id,
      amount: data.Amount,
      date: data.Date,
      vendor: data.Vendor,
      type: data.Type as TransactionType,
      category: data.Category,
      lat: data.Lat,
      lon: data.Lon,
      receiptImage: data.ReceiptImage,
    };
  }
}
