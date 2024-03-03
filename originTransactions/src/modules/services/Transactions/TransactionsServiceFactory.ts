import NetInfo from '@react-native-community/netinfo';
import TransactionsService from '@modules/services/Transactions/TransactionsService';
import OfflineTransactionsService from '@services/Transactions/OfflineTransactionsService';
import TransactionsServiceI from '@src/modules/services/Transactions/interfaces/TransactionsService';

export default async function transactionServiceFactory(): Promise<TransactionsServiceI> {
  const state = await NetInfo.fetch();

  if (state.isConnected) {
    return new TransactionsService();
  }

  return new OfflineTransactionsService();
}
