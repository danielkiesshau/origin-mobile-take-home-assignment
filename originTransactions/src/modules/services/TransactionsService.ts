import enviromentVariables from '@libs/enviromentVariables';
import Api from '@modules/libs/api/Api';
import TransactionsDTO from '@dtos/Transactions/TransactionsDTO';
import {Transaction} from '@dtos/Transactions/TransactionDTO';

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

export default class TransactionsService {
  private baseUrl = enviromentVariables.TRANSACTION_BASE_URL;
  private pageSize = 50;

  async getTransactions(page: number): Promise<Transaction[]> {
    const url = `${this.baseUrl}?page=${page}&pageSize=${this.pageSize}`;
    const response: TransactionsResponseAPI = await Api.get(url);
    return TransactionsDTO.parse(response);
  }

  async updateTransactionLocation(id: number, lat: number, lon: number) {
    const url = `${this.baseUrl}/${id}/coordinates`;
    const body = {
      Lat: lat,
      Lon: lon,
    };
    console.log('POST', url, body);
    return Api.post(url, body);
  }
}
