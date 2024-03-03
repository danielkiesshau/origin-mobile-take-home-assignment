import enviromentVariables from '@libs/enviromentVariables';
import Api from '@modules/libs/api/Api';
import TransactionsDTO from '@dtos/Transactions/TransactionsDTO';

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

  async getTransactions(page: number) {
    const url = `${this.baseUrl}?page=${page}&pageSize=${this.pageSize}`;
    const response: TransactionsResponseAPI = await Api.get(url);
    return TransactionsDTO.parse(response);
  }
}
