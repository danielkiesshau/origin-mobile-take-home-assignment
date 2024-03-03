import {TransactionResponseAPI} from '@services/TransactionsService';

export interface Transaction {
  id: number;
  amount: number;
  date: string;
  vendor: string;
  type: string;
  category: string;
  lat: number;
  lon: number;
  receiptImage: string;
}

export default class TransactionDTO {
  public static parse(data: TransactionResponseAPI): Transaction {
    return {
      id: data.Id,
      amount: data.Amount,
      date: data.Date,
      vendor: data.Vendor,
      type: data.Type,
      category: data.Category,
      lat: data.Lat,
      lon: data.Lon,
      receiptImage: data.ReceiptImage,
    };
  }
}
