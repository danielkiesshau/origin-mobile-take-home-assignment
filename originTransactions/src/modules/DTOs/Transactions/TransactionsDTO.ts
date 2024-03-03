import TransactionDTO, {Transaction} from '@dtos/Transactions/TransactionDTO';
import {TransactionsResponseAPI} from '@services/TransactionsService';

export default class TransactionsDTO {
  public static parse(response: TransactionsResponseAPI): Transaction[] {
    return response.data.Transactions.map(TransactionDTO.parse);
  }
}
