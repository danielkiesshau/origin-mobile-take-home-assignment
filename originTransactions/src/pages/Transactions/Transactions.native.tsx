import React from 'react';
import {FlatList} from 'react-native';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import TransactionItem from './components/TransactionItem/TransactionItem.native';

interface Props {
  transactions: Transaction[];
  goToTransactionDetail: (transaction: Transaction) => void;
  loadNextPage: () => void;
}

function Transactions({
  transactions,
  goToTransactionDetail,
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
      data={transactions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onEndReached={loadNextPage}
    />
  );
}

export default Transactions;
