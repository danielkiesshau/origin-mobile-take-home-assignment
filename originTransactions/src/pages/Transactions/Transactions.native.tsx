import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import TransactionItem from './components/TransactionItem/TransactionItem.native';

interface Props {
  transactions: Transaction[];
  isRefreshing: boolean;
  goToTransactionDetail: (transaction: Transaction) => void;
  loadNextPage: () => void;
  loadTransactions: () => void;
}

function Transactions({
  transactions,
  isRefreshing,
  goToTransactionDetail,
  loadTransactions,
  loadNextPage,
}: Props) {
  const keyExtractor = (item: Transaction) => item.id.toString();
  const renderItem = ({item}: {item: Transaction}) => (
    <TransactionItem
      transaction={item}
      goToTransactionDetail={goToTransactionDetail}
    />
  );

  return (
    <FlatList
      refreshing={isRefreshing}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={loadTransactions}
        />
      }
      onRefresh={loadTransactions}
      data={transactions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onEndReached={loadNextPage}
    />
  );
}

export default Transactions;
