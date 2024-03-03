import React from 'react';
import {FlatList} from 'react-native';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import TransactionItem from './components/TransactionItem/TransactionItem.native';

interface Props {
  transactions: Transaction[];
}

function Transactions({transactions}: Props) {
  const keyExtractor = (item: Transaction) => item.id.toString();
  const renderItem = ({item}: {item: Transaction}) => (
    <TransactionItem transaction={item} />
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

export default Transactions;
